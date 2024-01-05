import { NextFunction, Request, Response } from 'express';
import { resultSchema } from './schema';

export async function validateResultInsert(req: Request, res: Response, next: NextFunction) {
  try {
    const { body } = req;
    await resultSchema.validateAsync(body);
    next();
  } catch (error) {
    return res.status(400).json({message: error.message});
  }
}
