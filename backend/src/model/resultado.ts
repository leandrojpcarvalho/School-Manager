import Resultado from '../db/models/Resultado';
import Student from '../db/models/Student';
import { IModelResultado } from '../interfaces/Model';

export default class ModelResultado implements IModelResultado {
  #model;

  constructor() {
    this.#model = Resultado;
  }

  getAll({ id, name }: Student) {
    return this.#model.findAll( { where: {studentId: `student-${name}-${id}`} });
  }
}
