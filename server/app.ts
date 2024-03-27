import connection_db from "./database/connection_db";
import * as express from 'express';
import {PORT} from './config'

export const app = express();
app.use(express.json());

try {
    connection_db.authenticate()
    
    console.log('conected')
} catch (error) {
    console.log(`error`)
    
}
app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });