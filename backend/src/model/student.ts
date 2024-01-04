import Student from '../db/models/Student';
import { IModelStudent } from '../interfaces/Model';

export default class ModelStudent implements IModelStudent {
  #model;

  constructor() {
    this.#model = Student;
  }

  getById(studentId: number) {
    return this.#model.findByPk(studentId);
  }
}
