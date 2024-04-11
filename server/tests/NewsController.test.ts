import /* * as */ request  from "supertest";
import {app, server} from '../app';
import connection_db from '../database/connection_db'
import NewsModel from "../models/NewModel";
import UserModel from "../models/UserModel";
import {createToken} from "../utils/jwt"


describe('TESTING CRUD news', () => {

    describe('GET', () => {
        test('GET ', async() => {
            const response = await request(app).get('/api/news')
            expect(response.status).toBe(200)
            expect(Array.isArray(response.body)).toBe(true)
        })    
    });
    });
    
    /* describe('News creation', () => {
        let userId: number;
        let token: string;
        let newsId: number;
    
        beforeEach(async () => {
            const user:any = await UserModel.create({
                name: "test",
                email: "test@gmail.com",
                password: "1234" 
            });
    
            token = await createToken(user);
            userId = user.id_user;
        }); 
        test('NewsModel.create', async () => {
            const newsData:any = {
                tittle: "Test", 
                imageUrl: "www.google.es",
                content: "test news.",
                date: new Date().toISOString(),
                user: userId

            };
            const news:any = await NewsModel.create(newsData);
            expect(news).toBeDefined(); */
            /* expect(news.id_news).toBeDefined();
            expect(news.tittle).toBe(newsData.tittle);
            expect(news.content).toBe(newsData.content);
            expect(news.date).toBe(newsData.date);
            expect(news.user).toBe(userId);
            expect(newsData).toBeDefined();
            expect(newsData.id_news).toBeDefined(); */

        /* });
        afterAll(async () => {
            await connection_db.sync({ force: true });
            server.close();
        });
     */
        /* test('POST /api/news', async () => {
           

        });
     */
        // Puedes agregar más pruebas aquí, todas ellas tendrán acceso a userId, token y newsId
  /*   }); */
            /* const response = await api.post('/api/news').set('Authorization', token).send(newsData);
            expect(response.status).toBe(201); */
          /*   try {
                const news:any = await NewsModel.findOne({ where: { title: newsData.tittle } });
                expect(news).not.toBeNull();
                expect(news.get('title')).toBe(newsData.tittle);
                expect(news.get('content')).toBe(newsData.content);
            } catch (error) {
                console.error('Error al buscar la noticia:', error);
            } */
        

/* test('POST /api/users/register', async () => {
            const response = await api.post('/api/users/register').send({
                "name": "testUser",
                "email": "test@gmail.com",
                "password": "1234"
            });
            expect(response.status).toBe(201);
            expect(response.body.sesiondata).toHaveProperty('id_user');
            userId = response.body.sesiondata.id_user; 
            token = `Bearer ${response.body.sesiondata.token}`; 
        }); */
        
 

    
    