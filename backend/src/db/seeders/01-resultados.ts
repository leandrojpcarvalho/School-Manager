import {  QueryInterface } from 'sequelize';

const firstStudent = 'student-leandro-1';

export default {
  async up (queryInterface:QueryInterface) {
    const seedData = [
      {
        student_id: firstStudent,
        bimestre: 'PRIMEIRO',
        disciplina: 'Artes',
        nota: 5,
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
      {
        student_id: firstStudent,
        bimestre: 'PRIMEIRO',
        disciplina: 'Biologia',
        nota: 5,
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
      {
        student_id: firstStudent,
        bimestre: 'PRIMEIRO',
        disciplina: 'Geografia',
        nota: 5,
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
      {
        student_id: firstStudent,
        bimestre: 'PRIMEIRO',
        disciplina: 'Sociologia',
        nota: 5,
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
      {
        student_id: firstStudent,
        bimestre: 'SEGUNDO',
        disciplina: 'Artes',
        nota: 5,
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
      {
        student_id: firstStudent,
        bimestre: 'SEGUNDO',
        disciplina: 'Biologia',
        nota: 3,
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
      {
        student_id: firstStudent,
        bimestre: 'SEGUNDO',
        disciplina: 'Geografia',
        nota: 5,
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
      {
        student_id: firstStudent,
        bimestre: 'SEGUNDO',
        disciplina: 'Sociologia',
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
