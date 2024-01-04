import { Bimestre, Disciplina } from './Enums';

export interface TableResult {
  id: string;
  bimestre: Bimestre;
  disciplina: Disciplina;
  nota: number;
}
