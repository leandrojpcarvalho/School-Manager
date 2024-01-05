import { NextFunction, Request, Response } from 'express';
import { deleteSchema, resultSchema } from './schema';

export async function validateResultInsert(req: Request, res: Response, next: NextFunction) {
  try {
    const { body } = req;
    await resultSchema.validateAsync(body);
    next();
  } catch (error) {
    if ((error instanceof Error)) return next({ message: error.message, status: 400});
    next(error);
  }
}

export async function validateDelete(req: Request, res: Response, next: NextFunction) {
  try {
    const { body } = req;
    await deleteSchema.validateAsync(body);
    next();
  } catch (error) {
    if ((error instanceof Error)) return next({ message: error.message, status: 400});
    next(error);
  }
}
