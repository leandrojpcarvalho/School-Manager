import { RequestHandler } from 'express';
import schemasImport from './schema';
import { MiddlewareFactory } from '../interfaces/Middleware';


export class MiddlewareMaker implements MiddlewareFactory{
  constructor(private schemas = schemasImport) { }

  public createMiddleware(schema: keyof typeof this.schemas): RequestHandler {
    return async(req, _res, next) => {
      try {
        const { body } = req;
        await this.schemas[schema].validateAsync(body);
        next();
      } catch (error) {
        next(error);
      }
    };
  }
}
