import * as request  from "supertest";
import {app, server} from '../app';
import connection_db from '../database/connection_db'
import NewsModel from "../models/NewsModel";


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
    
    describe('News creation', () => {
        let userId: number;
        let token: string;
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
            try {
                const news = await NewsModel.findOne({ where: { title: newsData.tittle } });
                expect(news).not.toBeNull();
                expect(news.get('title')).toBe(newsData.tittle);
                expect(news.get('content')).toBe(newsData.content);
            } catch (error) {
                console.error('Error al buscar la noticia:', error);
            }
        });
    });

    afterAll(async () => {
        await connection_db.sync({ force: true });
        server.close();
    });