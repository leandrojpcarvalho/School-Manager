import express from 'express';
import ControllerResultado from '../controller/resultado';

const routeResultado = express.Router();
const resultController = new ControllerResultado();

routeResultado.get('/result/:id', (req, res) => resultController.getById(req, res));

export default routeResultado;