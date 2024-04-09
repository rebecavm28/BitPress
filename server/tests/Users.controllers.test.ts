import request from 'supertest';
import {app, server} from '../app';
import NewsModel from '../models/NewsModel';
import connection_db from '../database/connection_db';


const api = request(app);

// Variable para almacenar el token de autenticación
let Token: string;

beforeAll(async () => {
  // Envía una solicitud de inicio de sesión para obtener el token
  const loginResponse = await api
    .post('/users/login') //login es tu ruta de inicio de sesión
    .send({ email: 'correo@example.com', password: 'contraseña' });

  // Extrae el token de la respuesta y almacénalo en authToken
  Token = loginResponse.body.token;
});

describe('GET', () => {
  test('GET Response body must be an array and then show 200 status', async () => {
    // Utiliza el token de autenticación en la solicitud GET
    const response = await api.get('/api/users').set('Authorization', `Bearer ${Token}`);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.status).toBe(200);
  });
});
