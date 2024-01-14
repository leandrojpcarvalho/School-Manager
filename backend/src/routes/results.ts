import express from 'express';
import ControllerResultado from '../controller/resultado';
import { MiddlewareMaker } from '../middlewares/MiddlewareFactory';

const routeResultado = express.Router();
const resultController = new ControllerResultado();
const middlewareFactory = new MiddlewareMaker();

routeResultado.delete(
  '/:id',
  middlewareFactory.createMiddleware('deleteSchema'),
  async (req, res, next) => {
    try {
      await resultController.deleteResult(req, res);
    } catch (error) {
      next(error);
    }
  }
);

routeResultado.post(
  '/:id',
  middlewareFactory.createMiddleware('resultSchema'),
  async (req, res, next) => {
    try {
      await resultController.insertNewResult(req, res);
    } catch (error) {
      next(error);
    }
  }
);
routeResultado.get('/:id', (req, res) => resultController.getById(req, res));
routeResultado.put(
  '/:id',
  middlewareFactory.createMiddleware('arrResultSchema'),
  async (req, res, next) => {
    try{
      await resultController.updateData(req, res);
    } catch (error) {
      next(error);
    }
  }
);

export default routeResultado;
