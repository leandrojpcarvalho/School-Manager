import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../config/database';

class Student extends Model<
  InferAttributes<Student>,
  InferCreationAttributes<Student>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare createdAt: CreationOptional<string>;
  declare updatedAt: CreationOptional<string>;
}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    }
  },
  {
    sequelize,
    timestamps: true,
    tableName: 'students',
  }
);


export default Student;