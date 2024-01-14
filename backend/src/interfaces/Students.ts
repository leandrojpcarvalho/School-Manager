import { InferAttributes } from 'sequelize';
import Student from '../db/models/Student';

export interface TableStudent extends InferAttributes<Student> {}
