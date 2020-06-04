import { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } from './settings';
import { createConnection } from 'typeorm';

export const connection = createConnection({
  name: 'default',
  type: 'postgres',
  host: DB_HOST,
  port: 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  entities: [`${__dirname}/entity/*.ts`],
  migrations: [`${__dirname}/migrations/*.ts`],
  uuidExtension: 'pgcrypto',
});

export const getConnection = () => connection;
