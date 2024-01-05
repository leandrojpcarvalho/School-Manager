import Resultado from '../db/models/Resultado';
import Student from '../db/models/Student';
import { AsyncResponse, InsertResultData } from '../types';
import { TableResult } from './Resultado';

export interface IModelResultado {
  getOne(data: InsertResultData): AsyncResponse<Resultado | null>
  getAll(student: Student): AsyncResponse<Resultado[]>;
  insertNewResult(result: TableResult): AsyncResponse<Resultado>;
  deleteResult(result: TableResult): AsyncResponse<number>;
}

export interface IModelStudent {
  getById(studentId: number): AsyncResponse<Student | null>
}
