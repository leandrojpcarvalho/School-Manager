import { InferAttributes } from 'sequelize';
import { Bimestre, Disciplina } from './Enums';
import Resultado from '../db/models/Resultado';

export interface TableResult extends InferAttributes<Resultado> {
  studentId: string;
  bimestre: Bimestre;
  disciplina: Disciplina;
  nota: number;
}
