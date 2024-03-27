import connection_db from "./database/connection_db";
import express, { Express } from "express";
import { PORT } from './helpers/config';
import cors from "cors";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use

async function startServer() {
  try {
    await connection_db.authenticate();
    console.log('Connection has been established successfully.');
    await nombredelmodelo.sync();
    console.log("The table for the Bonsai model was just (re)created!");
    
    app.listen(PORT, () => {
      console.log(`Server up in http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();
