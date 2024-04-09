import * as request  from "supertest";
import {app, server} from '../app';
import connection_db from '../database/connection_db'
import * as moment from 'moment';


const api = request(app);

describe('TESTING CRUD news', () => {

    describe('GET', () => {
        test('GET ', async() => {
            const response = await request(app).get('/api/news')
            expect(response.status).toBe(200)
            expect(Array.isArray(response.body)).toBe(true)
        })    
    });
    });
    
    describe('POST', () => {
        let newUser: any = {};
        let user: any;
        let token: any;
    
        test('POST response should be an object and then show 201 status', async () => {
            newUser = await api.post('/users/register').send({
                name: 'Teste1',
                email: "test@gmail.com",
                password: "12345"
            });
    
            console.log(newUser.body);
            user = newUser.body.sesiondata.id_user;
            token = `Bearer ${newUser.body.sesiondata.token}`;
    
            const date = moment().format('YYYY-MM-DD');
            const response = await api.post('/api/news').set('Authorization', token).send({
                "title": "testTitle",
                "imageUrl": "http://www.imagen.com",
                "content": "descripcionTest",
                "date": date,
                "user": user,
            });
    
            expect(response.status).toBe(201);
            expect(typeof response.body).toBe('object');
        });
    });
    
    /* afterAll( async () => {
        server.close();
        await connection_db.sync({force: true });
        console.log('All databases are clean')
     }) */
     afterAll(done => {
        server.close(done);
       });