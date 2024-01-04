import Resultado from '../db/models/Resultado';
import { IModelResultado } from '../interfaces/Model';

export default class ModelResultado implements IModelResultado {
  #model;

  constructor() {
    this.#model = Resultado;
  }

  async getById(id: string) {
    return this.#model.findByPk(id);
  }
}
