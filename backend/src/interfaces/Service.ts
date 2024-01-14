import Resultado from '../db/models/Resultado';
import { InsertResultData, Service, UpdateData } from '../types';
import { TableResult } from './Resultado';


export interface IServiceResultado {
  getAll(id: number): Service<Resultado[]>;
  insertNewResult(data: InsertResultData): Service<Resultado>;
  deleteResult(data: InsertResultData): Service<null>;
  updateResult(data: UpdateData) : Service<TableResult[]>;
}

