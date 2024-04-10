import { Sequelize } from "sequelize";
import { DB_DEV_NAME, DB_USER, DB_PASSWORD, NODE_ENV, DB_TEST_NAME} from'../config';

const DB_NAME = NODE_ENV === 'test' ? DB_TEST_NAME : DB_DEV_NAME;//Escoge nuestra conexión.

// Ensure that the variables have string values
const dbName = DB_DEV_NAME || '';
const dbUser = DB_USER || '';
const dbPassword = DB_PASSWORD || '';

const connection_db = new Sequelize(dbName, dbUser, dbPassword, {
  host: 'localhost',
  dialect: 'mysql'
});

export default connection_db;