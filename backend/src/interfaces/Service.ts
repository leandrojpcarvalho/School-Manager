import Resultado from '../db/models/Resultado';
import { AsyncResponse, PayloadType, ServiceType } from '../types';

export interface IServiceResultado {
  getAll(id: number): AsyncResponse<ServiceType<PayloadType<Resultado[]>>>;
}

