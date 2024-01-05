import express from 'express';
import ControllerResultado from '../controller/resultado';
import { validateResultInsert } from '../middlewares/joiValidations';

const routeResultado = express.Router();
const resultController = new ControllerResultado();

routeResultado.post('/:id', validateResultInsert, async (req, res, next) => {
  try {
    await resultController.insertNewResult(req,res);
  } catch (error) {
    next(error);
  }
});
routeResultado.get('/:id', (req, res) => resultController.getById(req, res));

export default routeResultado;