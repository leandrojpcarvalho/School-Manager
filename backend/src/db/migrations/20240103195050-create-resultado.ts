import { DataTypes, InferAttributes, Model, QueryInterface } from 'sequelize';
import Resultado from '../models/Resultado';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<InferAttributes<Resultado>>>('resultados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER 
      },
      bimestre: {
        type: DataTypes.STRING
      },
      disciplina: {
        type: DataTypes.STRING
      },
      nota: {
        type: DataTypes.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('resultados');
  }
};