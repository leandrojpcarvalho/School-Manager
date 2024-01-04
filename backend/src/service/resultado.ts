import { CustomError } from '../CustomError';
import { TableResult } from '../interfaces/Resultado';
import { IServiceResultado } from '../interfaces/Service';
import ModelResultado from '../model/resultado';
import ModelStudent from '../model/student';
import { InsertResultData } from '../types';

export default class ServiceResultado implements IServiceResultado {
  #modelResultado: ModelResultado;
  #modelStudents: ModelStudent;

  constructor(modelResultado = new ModelResultado(), modelStudent = new ModelStudent()) {
    this.#modelResultado = modelResultado;
    this.#modelStudents = modelStudent;
  }

  async getAll(id: number) {
    const payload = await this.#modelResultado.getAll(await this.#validateStudent(id));
    return {status: 200, payload};
  }

  async insertNewResult({ result, studentId }: InsertResultData) {
    const {dataValues: {id, name}} = await this.#validateStudent(Number(studentId));
    const newStutendId = `student-${name}-${id}`;
    await this.#validateIfNotExistResult({studentId: newStutendId, result});
    const newData: TableResult = {studentId: newStutendId, ...result};
    const payload = await this.#modelResultado.insertNewResult(newData);
    return { status: 200, payload};
  }

  async #validateStudent(studentId: number) {
    const isValidStudent = await this.#modelStudents.getById(studentId);
    if(!isValidStudent) throw new CustomError('student not found', 404);
    return isValidStudent;
  }

  async #validateIfNotExistResult(data: InsertResultData) {
    const existInDb = await this.#modelResultado.getOne(data);
    if(existInDb) throw new CustomError('This data exist', 400);
  }
}
