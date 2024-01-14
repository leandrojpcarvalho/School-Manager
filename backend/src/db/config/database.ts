import cls from 'cls-hooked';
import { Sequelize } from 'sequelize';
import config from '.';

const nameSpace = cls.createNamespace('transactions');

Sequelize.useCLS(nameSpace);

export default new Sequelize(config);