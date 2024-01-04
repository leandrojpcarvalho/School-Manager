import { DataTypes, InferAttributes, Model, QueryInterface } from 'sequelize';
import Resultado from '../models/Resultado';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<InferAttributes<Resultado>>>('resultados', {
      studentId: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'student_id'
      },
      bimestre: {
        allowNull: false,
        type: DataTypes.STRING
      },
      disciplina: {
        allowNull: false,
        type: DataTypes.STRING
      },
      nota: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('resultados');
  }
};