/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../CustomError';

function errorMiddleware(
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const status = error.status || 500;
  const message = error.message || 'something wrong';

  return res.status(status).json({message});
}

export default errorMiddleware;
