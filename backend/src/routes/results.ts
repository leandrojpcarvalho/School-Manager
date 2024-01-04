import express from 'express';
import ControllerResultado from '../controller/resultado';

const routeResultado = express.Router();
const resultController = new ControllerResultado();

routeResultado.post('/:id', (req, res) =>resultController.insertNewResult(req,res));
routeResultado.get('/:id', (req, res) => resultController.getById(req, res));

export default routeResultado;