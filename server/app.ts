import connection_db from "./database/connection_db";
import * as express from 'express';
import {PORT} from './config'
import {UserModel} from './models/UserModel'
import {RolModel} from    './models/RolModel'
import NewsModel from "./models/NewsModel";
import { getAllNews } from "./controllers/NewsController";
import { getAllUsers } from "./controllers/UsersController";

export const app = express();
app.use(express.json());
app.get('/news', getAllNews);
app.get('/users', getAllUsers)

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