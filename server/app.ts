import connection_db from "./database/connection_db";
import * as express from 'express';
import { PORT } from './helpers/config';
import Rol from "./models/RolesModel"


 export const app = express();


app.use(express.json());
app.use

async function startServer() {
  try {
    await connection_db.authenticate();
    console.log('Connection has been established successfully.');
    await Rol.sync();
    console.log("The table for the Bonsai model was just (re)created!");
    
    app.listen(PORT, () => {
      console.log(`Server up in http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();
