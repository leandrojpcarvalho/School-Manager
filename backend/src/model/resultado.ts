import Resultado from '../db/models/Resultado';
import Student from '../db/models/Student';
import { IModelResultado } from '../interfaces/Model';
import { TableResult } from '../interfaces/Resultado';
import { DeleteType, InsertResultData } from '../types';

export default class ModelResultado implements IModelResultado {
  #model;

  constructor() {
    this.#model = Resultado;
  }

  getOne({ result, studentId }: InsertResultData) {
    const { bimestre, disciplina } = result;
    return this.#model.findOne({
      where: {
        studentId,
        bimestre,
        disciplina,
      },
    });
  }

  getAll({ id }: Student) {
    return this.#model.scope('student').findAll({
      where: { studentId: id },
    });
  }

  insertNewResult(result: TableResult) {
    return this.#model.create(result);
  }

  async deleteResult({ bimestre, disciplina, studentId }: DeleteType) {
    return await this.#model.destroy({
      where: { bimestre, disciplina, studentId },
    });
  }

  async updateGrade(data: TableResult) {
    const { bimestre, disciplina, studentId, nota } = data;
    const [register, isCreated] = await this.#model.findOrCreate(
      {
        where: { bimestre, disciplina, studentId },
        defaults: data,
      });
    if(!isCreated) {
      await this.#model.scope('student').update( { nota }, { where: { bimestre, disciplina, studentId }});
      return {...register.dataValues, nota, updatedAt: (new Date()).toLocaleDateString('pt-BR')};
    }
    return register.dataValues;
  }
}
