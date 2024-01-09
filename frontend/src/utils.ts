import { Bimestre, Disciplina } from "../shared/enums";
import { APIFetch, APISubjectInfo, BimesterBoard, BimestreType, SubjectInfo } from "./types";

export const BIMESTER_MAP: (keyof typeof Bimestre)[] = ['PRIMEIRO','SEGUNDO','TERCEIRO','QUARTO'];
export const SUBJECTS: (keyof typeof Disciplina)[] = [
  'Biologia',
  'Artes',
  'Geografia',
  'Sociologia',
];

const INITIAL_STATE: BimesterBoard = {
  1: [],
  2: [],
  3: [],
  4: [],
}

export const transformData = (obj: APISubjectInfo): SubjectInfo => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { createdAt, updatedAt, ...rest } = obj;
  return {
      creadaEm: dateFormatter(createdAt),
      ...rest,
    };
}

export const createNewSubject = (disciplina: keyof typeof Disciplina, bimestre: BimestreType): SubjectInfo=> {
  const newDate = {
    bimestre,
    creadaEm: new Date().toLocaleDateString('pt-br'),
    disciplina,
    nota: 0,
    studentId: 'student',
    isUpdated: false,
  };
  return newDate;
}

export const dateFormatter = (dateSql: string) => new Date(dateSql.split('.')[0]).toLocaleDateString('pt-BR');

export const treatmentData = (arrData: APIFetch) => {
  return arrData.reduce((acc, currData) => {
    const key = Bimestre[currData.bimestre]
    const newData = currData;
    return { ...acc, [key]: [...acc[key], newData]}
  }, INITIAL_STATE);
};