import { type Options } from 'sequelize';

const config: Options = {
  username: 'root',
  password: 'password',
  database: 'school_manager',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
};

export = config;