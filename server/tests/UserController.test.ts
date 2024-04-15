import /* * as */ request from 'supertest';
import { app, server } from '../app';
import UserModel from '../models/UserModel';
import connection_db from '../database/connection_db';
import supertest from 'supertest';

const api = supertest(app);

describe('GET', () => {
    test('get', async() => {
        const response = await api.get('/api/users')
        expect(Array.isArray(response.body)).toBe(true)
        expect(response.status).toBe(200)
    })
})

    describe('POST', () => {
        test('post', async() => {
            const response = await api.post('/api/users/register').send({
                "name": "test1",
                "email": "test1",
                "password": "1234"
            })
            expect(response.status).toBe(201)
            expect(typeof response).toBe('object')
        })
        
        afterAll( async () => {
            server.close();
            await connection_db.sync({force: true });
            console.log('All databases are clean')
         });
    })

describe('User creation and deletion', () => {
    let userId: number;
    test('POST /api/users/register', async () => {
        const response = await api.post('/api/users/register').send({
            "name": "testUser",
            "email": "testUser@example.com",
            "password": "1234"
        });
        expect(response.status).toBe(201);
        expect(response.body.sesiondata).toHaveProperty('id_user');
        userId = response.body.sesiondata.id_user; 
    });

    test('DELETE /api/users/:id', async () => {
        const response = await api.delete(`/api/users/${userId}`);
        expect(response.status).toBe(201); 
        const user = await UserModel.findByPk(userId);
        expect(user).toBeNull(); 
    });
});
describe('User update', () => {
    let userId: number;
    let token: string;

    test('POST /api/users/register', async () => {
        const response = await api.post('/api/users/register').send({
            "name": "testUser",
            "email": "testUser@gmail.com",
            "password": "1234",
            "rol":"admin"
        });
        expect(response.status).toBe(201);
        expect(response.body.sesiondata).toHaveProperty('id_user');
        userId = response.body.sesiondata.id_user; 
        token = `Bearer ${response.body.sesiondata.token}`; 
    });
    test('PUT /api/users/:id', async () => {
        const updatedUserData = {
            "name": "updatedTest",
            "email": "updatedTest@gmail.com",
            "password": "5678"
        };

        const response = await api.put(`/api/users/${userId}`).set('Authorization', token).send(updatedUserData);
        expect(response.status).toBe(200); 
        const user:any = await UserModel.findByPk(userId);
        expect(user.get('name')).toBe(updatedUserData.name);
        expect(user.get('email')).toBe(updatedUserData.email);
    });
    afterAll( async () => {
    server.close();
    await connection_db.sync({force: true });
    console.log('All databases are clean')
 });
});

