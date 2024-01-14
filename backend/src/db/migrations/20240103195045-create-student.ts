import { DataTypes, InferAttributes, Model, QueryInterface } from 'sequelize';
import Student from '../models/Student';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<InferAttributes<Student>>>('students', {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        allowNull:false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        defaultValue: DataTypes.NOW,
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('students');
  }
};