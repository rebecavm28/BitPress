import connection_db from "./database/connection_db";
import * as express from 'express';
import {PORT} from './config'
import * as cors from 'cors';
<<<<<<< HEAD
import {UserModel} from './models/UserModel'
import {RolModel} from    "./models/RolesModel"
import NewsModel from "./models/NewModel";
import newsRouter from "./routes/NewsRouter";
import userRouter from "./routes/UsersRouter";
=======
import newsRouter from "./routes/NewsRouter";
import userRouter from "./routes/UserRouter";
>>>>>>> feature-model

export const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/', newsRouter);
<<<<<<< HEAD
app.use('/api', userRouter)

try {
    connection_db.authenticate()
    RolModel.sync();
    UserModel.sync();
    NewsModel.sync();
    
=======
app.use('/api/', userRouter)

try {
    connection_db.authenticate()
    connection_db.sync()
>>>>>>> feature-model
    console.log('😎  conected, oh yeah!! 💕');
} catch (error) {
    console.log(`connection error 😒😒`)
    
}
app.listen(PORT, () => {
      console.log(`🚆Servidor corriendo en http://localhost:${PORT}`);
    });