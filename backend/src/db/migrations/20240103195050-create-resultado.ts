import { DataTypes, InferAttributes, Model, QueryInterface} from 'sequelize';
import Resultado from '../models/Resultado';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<InferAttributes<Resultado>>>(
      'resultados',
      {
        id: {
          type: DataTypes.CHAR(36),
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        studentId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          field: 'student_id',
          references: {
            key: 'id',
            model: 'students'
          },
          unique: 'compose'
        },
        bimestre: {
          allowNull: false,
          type: DataTypes.STRING(20),
          unique: 'compose'
        },
        disciplina: {
          allowNull: false,
          type: DataTypes.STRING(20),
          unique: 'compose'
        },
        nota: {
          allowNull: false,
          type: DataTypes.FLOAT,
        },
        criadoEm: {
          allowNull: false,
          type: DataTypes.DATE,
          field: 'criado_em',
        },
        atualizadoEm: {
          allowNull: false,
          type: DataTypes.DATE,
          field: 'atualizado_em',
        },
      },
    );
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('resultados');
  },
};
