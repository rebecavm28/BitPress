import  request  from "supertest";
import {app, server} from '../app';
import connection_db from '../database/connection_db'
import NewsModel from '../models/NewsModel'

const api = request(app);

DESCRIBE('testing news'), ()=>{
    test('Should create a new user', async() => {
        const response = await api.post('/news').send({
            title: 'Titulo de Teste',
            imageUrl: 'test',
            content:'content test',
            date:  '2021-06-30',
            user: '1'
        });
        
        expect(response.body).toBe(201);
    })
    afterAll( async () => {
        server.close();
        await connection_db.sync({force: true });
        console.log('All databases are clean')
     })
}