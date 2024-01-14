import Joi from 'joi';
import { TableResult } from '../../interfaces/Resultado';
import { Bimestre, Disciplina } from '../../interfaces/Enums';
import { RemoveKeys } from '../../types';

type BodyData = RemoveKeys<TableResult, 'studentId' | 'id' | 'atualizadoEm' | 'criadoEm'>;
type DeleteData = Omit<BodyData, 'nota'>;

const bimestre = Object.values(Bimestre).filter((data) => !Number(data));
const disciplina = Object.values(Disciplina).filter((data) => !Number(data) && data !== 0);


const resultSchema = Joi.object<BodyData, true>({
  bimestre: Joi.string().valid(...bimestre).required(),
  disciplina: Joi.string().valid(...disciplina).required(),
  nota: Joi.number().min(0).required(),
});

const arrResultSchema = Joi.array().items(resultSchema).min(1);

const deleteSchema = Joi.object<DeleteData, true>({
  bimestre: Joi.string().required().valid(...bimestre),
  disciplina: Joi.string().required().valid(...disciplina),
});


const schemaCollection = {
  resultSchema,
  arrResultSchema,
  deleteSchema,
};

export default schemaCollection;