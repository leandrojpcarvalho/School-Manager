import Resultado from '../db/models/Resultado';
import { AsyncResponse } from '../types';

export interface IServiceResultado {
  getById(id: string): AsyncResponse<ServiceType<Resultado|null>>;
}

export type ServiceType<T> = {
  status: number;
  payload: T;
};

export type PayloadType<T> = T | Error;
