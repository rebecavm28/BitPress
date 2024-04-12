import /* * as */ request  from "supertest";
import {app, server} from '../app';
import {NewsModel} from "../models/NewModel";
import UserModel from "../models/UserModel";
import {createToken} from "../utils/jwt";
import connection_db from "../database/connection_db";

const api = request(app);
describe('TESTING CRUD news', () => {

    let userId = "";
    let token= "";
    let newsId= "";
    
    beforeAll(async () => {
        const user:any = await UserModel.create({
            name: "test",
            email: "test@gmail.com",
            password: "1234",
            rol: "admin"
             
        });
        userId = await user?.get('id_user').toString();
        token = await createToken(user);
    });


    describe('GET', () => {
        test('GET ', async() => {
            const response = await request(app).get('/api/news')
            expect(response.status).toBe(200)
            expect(Array.isArray(response.body)).toBe(true)
        })    
    });

    describe('POST', () => {
        let dataNew = {}
        beforeEach(() => {
            dataNew = {
                tittle: "test",
                imageUrl: "test",
                content: "test",
                date: "2022-01-01",
                user: userId
            }
        })

        test("when users create a new note", async()=>{
            const response = await request(app)
            .post('/api/news').set('Authorization', `Bearer ${token}`)
            .send(dataNew);

            expect(response.status).toBe(201);
            expect(response.body.content).toBeDefined();
            expect(response.body.tittle).toBeDefined();
        })

    })

    describe('PUT', () => {
        let dataNew = {};
        let newsId = "";
    
        beforeEach(async () => {
            dataNew = {
                tittle: "test",
                imageUrl: "test",
                content: "test",
                date: "2022-01-01",
                user: userId
            };

            const responseCreation = await request(app)
                .post('/api/news').set('Authorization', `Bearer ${token}`)
                .send(dataNew);
    
            expect(responseCreation.status).toBe(201);
            expect(responseCreation.body.id_news).toBeDefined();

            newsId = responseCreation.body.id_news.toString();
        });
    
        test("when users update a new note", async () => {
            const updatedData = {
                tittle: "updated test",
                imageUrl: "updated test",
                content: "updated test",
                date: "2022-01-02",
                user: userId
            };
    
            const response = await request(app)
                .put(`/api/news/${newsId}`).set('Authorization', `Bearer ${token}`)
                .send(updatedData);
    
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("The Note was updated successfully!");
        });
    });
    afterAll(async () => {
        try {
            if (connection_db) {
                await UserModel.destroy({
                    where: {
                        name: "test"
                    }
                });
                await NewsModel.destroy({
                    where: {
                        tittle: "test"
                    }
                });
                await connection_db.sync({ force: true });
            }
        } catch (error) {
            console.error("Error", error);
        } finally {
            server.close();
        }
    });
})