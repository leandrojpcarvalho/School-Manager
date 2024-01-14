import { CustomError } from '../CustomError';
import { TableResult } from '../interfaces/Resultado';
import { IServiceResultado } from '../interfaces/Service';
import { TableStudent } from '../interfaces/Students';
import ModelResultado from '../model/resultado';
import ModelStudent from '../model/student';
import { InsertResultData, UpdateData } from '../types';

export default class ServiceResultado implements IServiceResultado {
  #modelResultado: ModelResultado;
  #modelStudents: ModelStudent;

  constructor(
    modelResultado = new ModelResultado(),
    modelStudent = new ModelStudent()
  ) {
    this.#modelResultado = modelResultado;
    this.#modelStudents = modelStudent;
  }

  async getAll(id: number) {
    const payload = await this.#modelResultado.getAll(
      await this.#validateStudent(id)
    );
    return { status: 200, payload };
  }

  async insertNewResult({ result, studentId }: InsertResultData) {
    const {
      dataValues: student,
    } = await this.#validateStudent(Number(studentId));
    await this.#validateIfNotExistResult({ studentId: this.#studentId(student), result });
    const newData: TableResult = { studentId: this.#studentId(student), ...result };
    const payload = await this.#modelResultado.insertNewResult(newData);
    return { status: 201, payload };
  }

  async updateResult({ result, studentId }: UpdateData) {
    const {
      dataValues: student,
    } = await this.#validateStudent(Number(studentId));
    const arrResult = await Promise.all(
      result.map((data) =>
        this.#modelResultado.updateGrade({
          ...data,
          studentId: this.#studentId(student),
        })
      )
    );
    return { status: 200, payload: arrResult };
  }

  async deleteResult(data: InsertResultData) {
    const {
      dataValues: student,
    } = await this.#validateStudent(Number(data.studentId));
    if (
      (await this.#modelResultado.deleteResult({
        ...data.result,
        studentId: this.#studentId(student),
      })) !== 1
    ) {
      throw new CustomError('Register not found', 404);
    }
    return { status: 204, payload: null };
  }

  async #validateStudent(studentId: number) {
    const isValidStudent = await this.#modelStudents.getById(studentId);
    if (!isValidStudent) throw new CustomError('student not found', 404);
    return isValidStudent;
  }

  async #validateIfNotExistResult(data: InsertResultData) {
    const existInDb = await this.#modelResultado.getOne(data);
    if (existInDb) throw new CustomError('This data exist', 400);
  }

  #studentId({ id, name}: TableStudent) {
    return `student-${name}-${id}`;
  }
}
