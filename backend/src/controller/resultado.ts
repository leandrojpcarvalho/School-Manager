import { Request, Response } from 'express';
import { IControllerResultado } from '../interfaces/Controller';
import ServiceResultado from '../service/resultado';

export default class ControllerResultado implements IControllerResultado {
  #service: ServiceResultado;

  constructor(service = new ServiceResultado()) {
    this.#service = service;
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const { status, payload } = await this.#service.getById(id);
    return res.status(status).json(payload);
  }
}
