import /* * as */ request  from "supertest";
import {app, server} from '../app';
import {NewsModel} from "../models/NewModel";
import UserModel from "../models/UserModel";
import {createToken} from "../utils/jwt"

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
            /* const body = response.body; */

            expect(response.status).toBe(201);
            expect(response.body.content).toBeDefined();
            expect(response.body.tittle).toBeDefined();
        })

    })

    describe('PUT', () => {
        let dataNew = {};
        let newsId = "";
    
        beforeEach(async () => {
            // Preparar los datos para la creación de la noticia
            dataNew = {
                tittle: "test",
                imageUrl: "test",
                content: "test",
                date: "2022-01-01",
                user: userId
            };
    
            // Crear una noticia de prueba utilizando api.post
            const responseCreation = await request(app)
                .post('/api/news').set('Authorization', `Bearer ${token}`)
                .send(dataNew);
    
            // Asegurarse de que la noticia se haya creado correctamente
            expect(responseCreation.status).toBe(201);
            expect(responseCreation.body.id_news).toBeDefined();
    
            // Asignar el ID de la noticia recién creada
            newsId = responseCreation.body.id_news.toString();
        });
    
        test("when users update a new note", async () => {
            // Actualizar la noticia con los nuevos datos
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