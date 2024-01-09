import {Bimestre, Disciplina} from '../shared/enums'

export type APISubjectInfo = {
  studentId: string;
  bimestre: BimestreType;
  disciplina: DisciplinaType;
  nota: number;
  createdAt: string;
  updatedAt: string;
};

export type BimestreType = keyof typeof Bimestre;
export type DisciplinaType = keyof typeof Disciplina;


export type APIFetch = APISubjectInfo[];

export type SubjectInfo = {
  studentId: string;
  bimestre: BimestreType;
  disciplina: DisciplinaType;
  nota: number;
  creadaEm: string;
  isUpdated?: boolean;
};

export type PostData = Omit<Omit<Omit<SubjectInfo, 'studentId'>, 'creadaEm'>, 'isUpdated'>;
export type DeleteData = Omit<PostData, 'nota'>;

export type BimesterBoard = {
  [key: number]: APIFetch
}

export type Update = {
  show: boolean;
  tempSubjects: SubjectInfo[];
  commitChanges: (changes: SubjectInfo[]) => Promise<APISubjectInfo[] | undefined>;
}