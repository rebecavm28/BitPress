import connection_db from "./database/connection_db";
import express from  'express';
import {PORT} from './config.js'

export const app = express();
app.use(express.json());

try {
    connection_db.authenticate()
/*     connection_db.sync();
 */    console.log('conected')
} catch (error) {
    console.log(`error`)
    
}
/* app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    }); */