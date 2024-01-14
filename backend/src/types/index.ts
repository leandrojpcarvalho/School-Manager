import Joi from 'joi';
import { TableResult } from '../interfaces/Resultado';

export type AsyncResponse<T> = Promise<T>;

export type SelectKeys<T, P extends keyof T> = Omit<T, P>

export type ErrorType = {
  message: string;
};

export type SubjectsData = Omit<TableResult, 'studentId'>

export type ServiceType<T> = {
  status: number;
  payload: T;
};

export type PayloadType<T> = T | ErrorType;

export type Service<T> = AsyncResponse<ServiceType<PayloadType<T>>>;

export type InsertResultData = {
  studentId: number|string;
  result: SubjectsData;
};

export type UpdateData = {
  studentId: number | string;
  result: SubjectsData[];
}

export type SchemasJoi = {
  [key: string]: Joi.ObjectSchema | Joi.ArraySchema
}