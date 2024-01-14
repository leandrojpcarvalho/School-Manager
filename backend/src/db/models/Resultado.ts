import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model }from 'sequelize';
import { Bimestre, Disciplina } from '../../interfaces/Enums';
import sequelize from '../config/database';
import Student from './Student';

class Resultado extends Model<InferAttributes<Resultado>, InferCreationAttributes<Resultado>>{
  declare id: CreationOptional<number>;
  declare studentId: string;
  declare bimestre: keyof typeof Bimestre;
  declare nota: number;
  declare disciplina: keyof typeof Disciplina;
  declare criadoEm: CreationOptional<string>;
  declare atualizadoEm: CreationOptional<string>;
}

Resultado.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey:true,
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: 'compose'
  },
  bimestre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: 'compose'
  },
  disciplina: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: 'compose'
  },
  nota: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  criadoEm: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  atualizadoEm: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'resultados',
  underscored: true,
});

Resultado.addScope('clean', {
  include: {
    model: Student,
    attributes: []
  }
});


Resultado.belongsTo(Student);
Student.hasMany(Resultado);

export default Resultado;
