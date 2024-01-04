import { type Options } from 'sequelize';
import 'dotenv/config';

const config: Options = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_NAME || 'school_manager',
  host: process.env.MYSQL_HOST || 'localhost',
  port: Number(process.env.PORT) || 3306,
  dialect: 'mysql',
};

export = config;