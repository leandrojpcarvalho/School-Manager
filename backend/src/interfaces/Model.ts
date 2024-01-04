import Resultado from '../db/models/Resultado';
import Student from '../db/models/Student';
import { AsyncResponse } from '../types';

export interface IModelResultado {
  getAll(student: Student): AsyncResponse<Resultado[]>;
}

export interface IModelStudent {
  getById(studentId: number): AsyncResponse<Student | null>
}
