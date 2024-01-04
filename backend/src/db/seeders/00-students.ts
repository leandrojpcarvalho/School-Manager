import { QueryInterface } from 'sequelize';

export default {
  async up (queryInterface:QueryInterface) {
    const seedData = [
      {
        id: 1,
        name: 'leandro',
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
      {
        id: 2,
        name: 'josé',
        created_at: '1990-1-1',
        updated_at: '1990-1-1'
      },
    ];
    await queryInterface.bulkInsert('students', seedData, {});
  },

  async down (queryInterface:QueryInterface) {
    await queryInterface.bulkInsert('students', [], {});
  }
};
