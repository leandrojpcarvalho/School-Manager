import { InferAttributes } from 'sequelize';
import { Bimestre, Disciplina } from './Enums';
import Resultado from '../db/models/Resultado';

export interface TableResult extends InferAttributes<Resultado> {
  bimestre: keyof typeof Bimestre;
  disciplina:keyof typeof Disciplina;
}
