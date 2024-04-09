import * as request  from "supertest";
import {app, server} from '../app';
import connection_db from '../database/connection_db'
import NewsModel from "../models/NewsModel";
import * as moment from 'moment';


const api = request(app);

describe('TESTING CRUD news', () => {

    describe('GET', () => {
        test('GET ', async() => {
            const response = await api.get('/api/news')
            expect(response.status).toBe(200)
            expect(Array.isArray(response.body)).toBe(true)
        })    
    });
    });
    
    describe('News creation', () => {
        let userId: number;
        let token: string;
    
        // Prueba para crear un usuario
        test('POST /api/users/register', async () => {
            const response = await api.post('/api/users/register').send({
                "name": "testUser",
                "email": "testUser@example.com",
                "password": "1234"
            });
            expect(response.status).toBe(201);
            expect(response.body.sesiondata).toHaveProperty('id_user');
            userId = response.body.sesiondata.id_user; 
            token = `Bearer ${response.body.sesiondata.token}`; 
        });
        test('POST /api/news', async () => {
            const newsData = {
                "tittle": "Test News",
                "imageUrl": "http://example.com/image.jpg",
                "content": "This is a test news.",
                "date": new Date().toISOString(),
                "user": userId
            };
    
            const response = await api.post('/api/news').set('Authorization', token).send(newsData);
            expect(response.status).toBe(201);
            const news = await NewsModel.findOne({ where: { title: newsData.tittle } });
            expect(news).not.toBeNull();
            expect(news.get('title')).toBe(newsData.tittle);
        });
    });
    
    // Después de todas las pruebas, limpia la base de datos
    afterAll(async () => {
        await connection_db.sync({ force: true });
        server.close();
    });
    
    /* afterAll( async () => {
        server.close();
        await connection_db.sync({force: true });
        console.log('All databases are clean')
     }) */
     /* afterAll(done => {
        server.close(done);
       }); */