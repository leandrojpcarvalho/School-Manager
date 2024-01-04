import {  QueryInterface } from 'sequelize';
import { Bimestre, Disciplina } from '../../interfaces/Enums';

const firstStudent = 'student-leandro-1';

export default {
  async up (queryInterface:QueryInterface) {
    const seedData = [
      {
        student_id: firstStudent,
        bimestre: Bimestre.PRIMEIRO,
        disciplina: Disciplina.Artes,
        nota: 5,
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
      {
        student_id: firstStudent,
        bimestre: Bimestre.PRIMEIRO,
        disciplina: Disciplina.Biologia,
        nota: 5,
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
      {
        student_id: firstStudent,
        bimestre: Bimestre.PRIMEIRO,
        disciplina: Disciplina.Geografia,
        nota: 5,
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
      {
        student_id: firstStudent,
        bimestre: Bimestre.PRIMEIRO,
        disciplina: Disciplina.Sociologia,
        nota: 5,
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
      {
        student_id: firstStudent,
        bimestre: Bimestre.SEGUNDO,
        disciplina: Disciplina.Artes,
        nota: 5,
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
      {
        student_id: firstStudent,
        bimestre: Bimestre.SEGUNDO,
        disciplina: Disciplina.Biologia,
        nota: 3,
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
      {
        student_id: firstStudent,
        bimestre: Bimestre.SEGUNDO,
        disciplina: Disciplina.Geografia,
        nota: 5,
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
      {
        student_id: firstStudent,
        bimestre: Bimestre.SEGUNDO,
        disciplina: Disciplina.Sociologia,
        nota: 5,
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
    ];

    await queryInterface.bulkInsert('resultados', seedData, {} );
  },

  async down (queryInterface:QueryInterface) {
    await queryInterface.bulkInsert('resultados', [], {});
  }
};
