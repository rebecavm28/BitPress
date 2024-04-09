import * as request from 'supertest';
import { app, server } from '../app';

const api = request(app);



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
                "name": "test",
                "email": "test",
                "password": "1234"
            })
            expect(response.status).toBe(201)
            expect(typeof response).toBe('object')
        })
    })
    afterAll(done => {
        server.close(done);
       });
   