import {Bimestre, Disciplina} from './enums'

export type APISubjectInfo = {
  studentId: number;
  bimestre: BimestreType;
  disciplina: DisciplinaType;
  nota: number;
  criadoEm: string;
  atualizadoEm: string;
};

export type RemoveKeys<T, R extends keyof  T> = Omit<T, R>
export type SelectKeys<T, R extends keyof  T> = Pick<T, R>


export type BimestreType = keyof typeof Bimestre;
export type DisciplinaType = keyof typeof Disciplina;


export type APIFetch = APISubjectInfo[];

export type SubjectInfo = APISubjectInfo & {
  isUpdated?: boolean;
  method: Method
};

export type PostData = SelectKeys<SubjectInfo, 'disciplina' | 'bimestre' | 'nota'>;
export type DeleteData = Omit<PostData, 'nota'>;

export type BimesterBoard = {
  [key: number]: APIFetch
}

export type Update = {
  show: boolean;
  tempSubjects: SubjectInfo[];
  commitChanges: (changes: SubjectInfo[]) => Promise<APISubjectInfo[] | undefined>;
}

export type Method = 'PUT' | 'POST' | 'DELETE';
