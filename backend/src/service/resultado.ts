import { IServiceResultado } from '../interfaces/Service';
import ModelResultado from '../model/resultado';
import ModelStudent from '../model/student';

export default class ServiceResultado implements IServiceResultado {
  #modelResultado: ModelResultado;
  #modelStudents: ModelStudent;

  constructor(modelResultado = new ModelResultado(), modelStudent = new ModelStudent()) {
    this.#modelResultado = modelResultado;
    this.#modelStudents = modelStudent;
  }

  async getAll(id: number) {
    const isValidStudent = await this.#modelStudents.getById(id);
    if(!isValidStudent) return {status: 404, payload: { message: 'student not found'}};
    const payload = await this.#modelResultado.getAll(isValidStudent);
    return {status: 200, payload};
  }
}
