import connection_db from "./database/connection_db";
import express from 'express';
import {PORT} from './config'
import cors from 'cors';
import newsRouter from "./routes/NewsRouter";

export const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/', newsRouter);
app.use('/api/',)

try {
    connection_db.authenticate()
    connection_db.sync()
    console.log('😎  conected, oh yeah!! 💕');
} catch (error) {
    console.log(`connection error 😒😒`)
    
}
app.listen(PORT, () => {
      console.log(`🚆Servidor corriendo en http://localhost:${PORT}`);
    });