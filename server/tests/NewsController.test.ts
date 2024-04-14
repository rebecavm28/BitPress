import /* * as */ request  from "supertest";
import {app, server} from '../app';
import {NewsModel} from "../models/NewModel";
import UserModel from "../models/UserModel";
import {createToken} from "../utils/jwt";
import connection_db from "../database/connection_db";
import {userAdminTest, newsTest, updatedData, newsTestUpdate} from './helpers/helperTest'

const api = request(app);
describe('TESTING CRUD news', () => {

    let userId = "";
    let token= "";
    let newsId= "";
    
    beforeAll(async () => {
        const user:any = await UserModel.create(
            userAdminTest
        );
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
                ...newsTest,
                user: userId 
            };
        })

        test("when users create a new note", async()=>{
            const response = await request(app)
            .post('/api/news').set('Authorization', `Bearer ${token}`)
            .send(dataNew);

            expect(response.status).toBe(201);
            expect(response.body.content).toBeDefined();
            expect(response.body.tittle).toBeDefined();
        })
        afterAll(async () => {
            await NewsModel.destroy({
                where: {
                    tittle: "test"
                }
            }); });
    })

    describe('PUT', () => {
        let dataNew = {};
        let newsId = "";
    
        beforeEach(async () => {
            dataNew = {
                ...updatedData,
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
          const response = await request(app)
                .put(`/api/news/${newsId}`).set('Authorization', `Bearer ${token}`)
                .send(dataNew);
    
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("The Note was updated successfully!");
        });
        afterAll(async () => {
            await NewsModel.destroy({
                where: {
                    tittle: "updated test"
                }
            })
        });
    });
    afterAll(async () => {
        await UserModel.destroy({
            where: {
                name: "test"
            }
        })
        await connection_db.sync({ force: true });
        server.close();
    });

    describe('DELETE', () => {
        let newsId = "";
        let dataNew = {}
        beforeEach(async () => {
            dataNew= {
                ...newsTestUpdate,
                user: userId 
            };
    
            const responseCreation = await request(app)
                .post('/api/news').set('Authorization', `Bearer ${token}`)
                .send(dataNew);
    
            expect(responseCreation.status).toBe(201);
            expect(responseCreation.body.id_news).toBeDefined();
    
            newsId = responseCreation.body.id_news.toString();
        });
    
        test("when users delete a new note", async () => {
            const response = await request(app)
                .delete(`/api/news/${newsId}`).set('Authorization', `Bearer ${token}`);
    
            expect(response.status).toBe(201);
            expect(response.body.message).toContain("the note has deleted correctly");
        });
    
        afterAll(async () => {
            await NewsModel.destroy({
                where: {
                    tittle: "test for delete"
                }
            }).catch(error => console.error("Error", error));
        });
    });
})