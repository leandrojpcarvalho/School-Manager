import { RequestHandler } from 'express';
import { SchemasJoi } from '../types';

export interface MiddlewareFactory {
  createMiddleware(schema: keyof SchemasJoi): RequestHandler;
}
