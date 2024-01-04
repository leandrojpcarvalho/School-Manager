import Resultado from '../db/models/Resultado';
import Student from '../db/models/Student';
import { AsyncResponse, InsertResultData } from '../types';

export interface IModelResultado {
  getOne(data: InsertResultData): AsyncResponse<Resultado | null>
  getAll(student: Student): AsyncResponse<Resultado[]>;
  insertNewResult(result: Resultado): AsyncResponse<Resultado>;
}

export interface IModelStudent {
  getById(studentId: number): AsyncResponse<Student | null>
}
