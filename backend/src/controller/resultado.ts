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
    const { status, payload } = await this.#service.getAll(Number(id));
    return res.status(status).json(payload);
  }

  async insertNewResult(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;
    const { status, payload } = await this.#service.insertNewResult({
      studentId: Number(id),
      result: body,
    });
    return res.status(status).json(payload);
  }
  async deleteResult(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;
    const { status, payload } = await this.#service.deleteResult({
      result: body,
      studentId: Number(id),
    });
    return res.status(status).json(payload);
  }
}
