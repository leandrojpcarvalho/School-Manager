import express from 'express';

const defaultRoute = express.Router();

defaultRoute.get('/', (req, res) => res.status(200).json({
  '/result': '/:id authorized methods: get, post, delete;'
}));

export default defaultRoute;