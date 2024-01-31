import { InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { CustomError } from '../CustomError';
import { MakeNullishOptional } from 'sequelize/types/utils';
import Resultado from '../db/models/Resultado';

type Constructor<T> = new () => T;
type ModelType<T extends Model> = Constructor<T> &
  typeof Model<InferAttributes<T>, InferCreationAttributes<T>>;

export default abstract class ModelAdapterSequelize<T extends Model> {
  #model: ModelType<T>;

  constructor(model: ModelType<T>) {
    this.#model = model;
  }

  async create(data: MakeNullishOptional<InferCreationAttributes<T>>) {
    return this.#model.create(data);
  }

  async update(data: Partial<InferAttributes<T>>) {
    const result = await this.#model.update(data, {
      where: { attribute: data },
    });
    if (result[0] === 0) {
      throw new CustomError('the update has failed', 422);
    }
    return true;
  }

  async delete(data: Partial<InferAttributes<T>>) {
    const result = await this.#model.destroy({ where: { attribute: data } });
    if (result === 0) {
      throw new CustomError('the delete has failed', 422);
    }
  }

  async getAll() {
    return this.#model.findAll();
  }

  async getOne(data: Partial<InferAttributes<T>>) {
    return this.#model.findOne({ where: { attribute: data } });
  }
}

class test extends ModelAdapterSequelize<Model> {}

const x = new test(Resultado);