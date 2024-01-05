import { number } from 'joi';
import {Bimestre, Disciplina} from '../shared/enums'

export type APISubjectInfo = {
  studentId: string;
  bimestre: keyof typeof Bimestre;
  disciplina: keyof typeof Disciplina;
  nota: number;
  createdAt: string;
  updatedAt: string;
};

export type APIFetch = APISubjectInfo[];

export type SubjectInfo = {
  studentId: string;
  bimestre: Bimestre;
  disciplina: keyof typeof Disciplina;
  nota: number;
  creadaEm: string;
};

export type BimesterBoard = {
  [key: number]: SubjectInfo[]
}

