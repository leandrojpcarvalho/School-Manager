import { IServiceResultado } from '../interfaces/Service';
import ModelResultado from '../model/resultado';

export default class ServiceResultado implements IServiceResultado {
  #model: ModelResultado;

  constructor(model = new ModelResultado()) {
    this.#model = model;
  }

  async getById(id: string) {
    const payload = await this.#model.getById(id);

    return { status: 200, payload };
  }
}
