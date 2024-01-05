import Resultado from '../db/models/Resultado';
import { InsertResultData, Service } from '../types';


export interface IServiceResultado {
  getAll(id: number): Service<Resultado[]>;
  insertNewResult(data: InsertResultData): Service<Resultado>;
  deleteResult(data: InsertResultData): Service<null>;
}

