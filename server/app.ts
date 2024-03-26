import express from 'express';
import { createConnection } from 'typeorm';

const app = express();
const port = process.env.PORT || 5000;

// Database connection
createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Lopezgrass74",
    database: process.env.NODE_ENV === 'test' ? process.env.DB_TEST_NAME : process.env.DB_DEV_NAME,
    entities: [
        // Add your entities here
    ],
    synchronize: true,
}).then(connection => {
    console.log("Database connection established");
}).catch(error => console.log("TypeORM connection error: ", error));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});