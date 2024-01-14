import {  QueryInterface } from 'sequelize';
import { v4 as uuid } from 'uuid';

const firstStudent = 1;
const date = new Date();
const seedData = [
  {
    id: uuid(),
    student_id: firstStudent,
    bimestre: 'PRIMEIRO',
    disciplina: 'Artes',
    nota: 5,
    criado_em: date,
    atualizado_em: date,
  },
  {
    id: uuid(),
    student_id: firstStudent,
    bimestre: 'PRIMEIRO',
    disciplina: 'Biologia',
    nota: 5,
    criado_em: date,
    atualizado_em: date,
  },
  {
    id: uuid(),
    student_id: firstStudent,
    bimestre: 'PRIMEIRO',
    disciplina: 'Geografia',
    nota: 5,
    criado_em: date,
    atualizado_em: date,
  },
  {
    id: uuid(),
    student_id: firstStudent,
    bimestre: 'PRIMEIRO',
    disciplina: 'Sociologia',
    nota: 5,
    criado_em: date,
    atualizado_em: date,
  },
  {
    id: uuid(),
    student_id: firstStudent,
    bimestre: 'SEGUNDO',
    disciplina: 'Artes',
    nota: 5,
    criado_em: date,
    atualizado_em: date,
  },
  {
    id: uuid(),
    student_id: firstStudent,
    bimestre: 'SEGUNDO',
    disciplina: 'Biologia',
    nota: 3,
    criado_em: date,
    atualizado_em: date,
  },
  {
    id: uuid(),
    student_id: firstStudent,
    bimestre: 'SEGUNDO',
    disciplina: 'Geografia',
    nota: 5,
    criado_em: date,
    atualizado_em: date,
  },
  {
    id: uuid(),
    student_id: firstStudent,
    bimestre: 'SEGUNDO',
    disciplina: 'Sociologia',
    nota: 5,
    criado_em: date,
    atualizado_em: date,
  },
];

export default {
  async up (queryInterface:QueryInterface) {
   

    await queryInterface.bulkInsert('resultados', seedData, {} );
  },

  async down (queryInterface:QueryInterface) {
    await queryInterface.bulkInsert('resultados', [], {});
  }
};
