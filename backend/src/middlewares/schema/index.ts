import Joi from 'joi';
import { TableResult } from '../../interfaces/Resultado';
import { Bimestre, Disciplina } from '../../interfaces/Enums';

type BodyData = Omit<Omit<Omit<TableResult, 'studentId'>, 'createdAt'>, 'updatedAt'>;

const bimestre = Object.values(Bimestre).filter((data) => !Number(data));
const disciplina = Object.values(Disciplina).filter((data) => !Number(data) && data !== 0);

export const resultSchema = Joi.object<BodyData, true>({
  bimestre: Joi.string().valid(...bimestre),
  disciplina: Joi.string().valid(...disciplina),
  nota: Joi.number().integer().positive(),
});
