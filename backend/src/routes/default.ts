import express from 'express';

const defaultRoute = express.Router();

defaultRoute.get('/', (req, res) => res.status(200).json({
  '/result': 'pegar os resultados de um aluno passando o id pelo params'
}));

export default defaultRoute;