import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model }from 'sequelize';
import { Bimestre, Disciplina } from '../../interfaces/Enums';
import sequelize from '../config/database';
import Student from './Student';

class Resultado extends Model<InferAttributes<Resultado>, InferCreationAttributes<Resultado>>{
  declare id: CreationOptional<string>;
  declare studentId: number;
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
    unique: 'compose',
    references: {
      key: 'id',
      model: Student,
    }
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
  timestamps: false,
  modelName: 'resultados',
});

Resultado.addScope('student', {
  include: {
    model: Student,
    as: 'Student',
    attributes: ['name']
  }
});


Resultado.belongsTo(Student, { targetKey: 'id', as: 'Student'});
Student.hasMany(Resultado, { keyType: 'id', as: 'Results' });

export default Resultado;
