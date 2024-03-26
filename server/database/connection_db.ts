import { Sequelize } from "sequelize";
import { DB_DEV_NAME, DB_USER, DB_PASSWORD, DB_TEST_NAME, NODE_ENV } from '../helpers/config.js';

const connection_db = new Sequelize(DB_DEV_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
  });
  
  export default connection_db;