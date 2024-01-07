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
  bimestre: keyof typeof Bimestre;
  disciplina: keyof typeof Disciplina;
  nota: number;
  creadaEm: string;
  isUpdated?: boolean;
};

export type PostData = Omit<Omit<Omit<SubjectInfo, 'studentId'>, 'creadaEm'>, 'isUpdated'>;
export type DeleteData = Omit<PostData, 'nota'>;


export type BimesterBoard = {
  [key: number]: SubjectInfo[]
}

