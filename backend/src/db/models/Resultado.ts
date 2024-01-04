import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model }from 'sequelize';
import { TableResult } from '../../interfaces/Resultado';
import { Bimestre, Disciplina } from '../../interfaces/Enums';
import sequelize from '../config/database';
import Student from './Student';

class Resultado extends Model<InferAttributes<Resultado>, InferCreationAttributes<Resultado>> implements TableResult{
  declare studentId: string;
  declare bimestre: Bimestre;
  declare nota: number;
  declare disciplina: Disciplina;
  declare createdAt: CreationOptional<string>;
  declare updatedAt: CreationOptional<string>;
}

Resultado.init({
  studentId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  bimestre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  disciplina: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nota: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'resultados',
  timestamps: true,
  underscored: true
});

Resultado.belongsTo(Student);
Student.hasMany(Resultado, {foreignKey: 'student_id', as: 'resultados'});

export default Resultado;
