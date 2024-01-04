import { TableResult } from '../interfaces/Resultado';

export type AsyncResponse<T> = Promise<T>;

export type ErrorType = {
  message: string;
};

export type ServiceType<T> = {
  status: number;
  payload: T;
};

export type PayloadType<T> = T | ErrorType;

export type Service<T> = AsyncResponse<ServiceType<PayloadType<T>>>;

export type InsertResultData = {
  studentId: number|string;
  result: Omit<TableResult, 'studentId'>;
};
