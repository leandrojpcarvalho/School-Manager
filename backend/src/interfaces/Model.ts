import Resultado from '../db/models/Resultado';

export interface IModelResultado {
  getById(id: string): Promise<Resultado | null>;
}
