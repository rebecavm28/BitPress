import { Sequelize } from "sequelize";
import { DB_DEV_NAME, DB_USER, DB_PASSWORD} from'../config';

// Ensure that the variables have string values
const dbName = DB_DEV_NAME || '';
const dbUser = DB_USER || '';
const dbPassword = DB_PASSWORD || '';

const connection_db = new Sequelize(dbName, dbUser, dbPassword, {
  host: 'localhost',
  dialect: 'mysql'
});

export default connection_db;