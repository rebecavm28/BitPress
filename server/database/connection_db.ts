import { Sequelize } from "sequelize";
import { DB_DEV_NAME, DB_USER, DB_PASSWORD, NODE_ENV, DB_TEST_NAME} from'../config';

const DB_NAME = NODE_ENV === 'test' ? DB_TEST_NAME : DB_DEV_NAME;

const DBNAME = DB_NAME || '';
const DBUSER = DB_USER || '';
const DBPASSWORD = DB_PASSWORD || '';

const connection_db = new Sequelize(DBNAME, DBUSER, DBPASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

export default connection_db;