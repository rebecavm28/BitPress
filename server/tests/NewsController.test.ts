import /* * as */ request  from "supertest";
import {app, server} from '../app';
import connection_db from '../database/connection_db'
import NewsModel from "../models/NewModel";
import UserModel from "../models/UserModel";
import {createToken} from "../utils/jwt"


describe('TESTING CRUD news', () => {

    let userId = "";
    let token= "";
    let newsId= "";
    
    beforeAll(async () => {
        const user:any = await UserModel.create({
            name: "test",
            email: "test@gmail.com",
            password: "1234" 
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
            /* const body = response.body; */

            expect(response.status).toBe(201);
            expect(response.body.content).toBeDefined();
            expect(response.body.tittle).toBeDefined();
        })

    })

    describe('PUT', () => {
        let dataNew ={}
        beforeEach(() => {
            dataNew = {
                tittle: "test",
                imageUrl: "test",
                content: "test",
                date: "2022-01-01",
                user: userId
            }
        })
        test("when users update a new note", async()=>{
            const createdNew = await NewsModel.findOne({where: {id_user:userId}});
            const newId = createdNew?.get('id_news')?.toString()
            const response = await request(app)
            .put(`/api/news/${newId}`)
            .set('Authorization', `Bearer ${token}`)
            .send(dataNew);

            expect(response.status).toBe(200);
            expect(response.body.message).toContain("The Note was updated successfully!")

        })


    })
    /* afterAll(async () => {
        await UserModel.destroy({
            where: {
                id_user: userId
            }
        });
        await NewsModel.destroy({
            where: {
                user: userId
            }
        });
        await connection_db.sync({ force: true });
        server.close();
    }); */
    afterAll(done => {
        server.close(done);
    });
})