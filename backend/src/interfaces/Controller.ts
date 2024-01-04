import { Request, Response } from 'express';
import { AsyncResponse } from '../types';

export interface IControllerResultado {
  getById(req: Request, res: Response): AsyncResponse<Response>;
}
