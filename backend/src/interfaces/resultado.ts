import { Bimestre, Disciplina } from './enums';

export interface TableResult {
  id: string;
  bimestre: Bimestre;
  disciplina: Disciplina;
  nota: number;
}
