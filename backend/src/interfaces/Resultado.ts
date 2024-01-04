import { Bimestre, Disciplina } from './Enums';

export interface TableResult {
  studentId: string;
  bimestre: Bimestre;
  disciplina: Disciplina;
  nota: number;
}
