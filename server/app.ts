import connection_db from "./database/connection_db";
import express from 'express';
import {PORT} from './config'
import {UserModel} from './models/UserModel'
import {RolModel} from    './models/RolModel'
import NewsModel from "./models/NewModel";

export const app = express();
app.use(express.json());

try {
    connection_db.authenticate()
    RolModel.sync();
    UserModel.sync();
    NewsModel.sync();
    console.log('😎  conected, oh yeah!! 💕')
} catch (error) {
    console.log(`connection error 😒😒`)
    
}
app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });