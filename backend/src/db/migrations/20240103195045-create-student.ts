import { DataTypes, InferAttributes, Model, QueryInterface } from 'sequelize';
import Student from '../models/Student';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<InferAttributes<Student>>>('students', {
      id: {
        allowNull: false,
        type: DataTypes.STRING 
      },
      name: {
        allowNull:false,
        type: DataTypes.STRING
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
    await queryInterface.dropTable('students');
  }
};