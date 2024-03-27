import connection_db from "./database/connection_db";
import * as express from 'express';
import {PORT} from './config'
import {UserModel} from './models/UserModel'
import {RoleModel} from    './models/RolModel'
import NewsModel from "./models/NewsModel";

export const app = express();
app.use(express.json());

try {
    connection_db.authenticate()
    RoleModel.sync();
    UserModel.sync();
    NewsModel.sync();
    console.log('😎  conected, oh yeah!! 💕')
} catch (error) {
    console.log(`connection error 😒😒`)
    
}
app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });