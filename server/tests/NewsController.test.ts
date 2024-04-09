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
    .post('/news/login') //login es tu ruta de inicio de sesión
    .send({ email: 'correo@example.com', password: 'contraseña' });

  // Extrae el token de la respuesta y almacénalo en authToken
  Token = loginResponse.body.token;
});

describe('GET', () => {
  test('GET Response body must be an array and then show 200 status', async () => {
    // Utiliza el token de autenticación en la solicitud GET
    const response = await api.get('/api/news').set('Authorization', `Bearer ${Token}`);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.status).toBe(200);
  });
});

describe('DELETE', () => {
  let createdNews: any;

  beforeEach(async () => {
    createdNews = await NewsModel.create({
      title: 'test',
      content: 'test content',
      imageUrl: 'imagen',
      date: '2000-01-01',
      user_Id: 1,
    });

    // Utiliza el token de autenticación en la solicitud DELETE
    await api
      .delete(`/api/news/ ${createdNews.id}`)
      .set('Authorization', `Bearer ${Token}`)
      .send();
  });

  test('Delete response should show 200 status', () => {
    expect(status).toBe(200);
  });
});

describe('PUT', () => {
  let createdNews: any;

  beforeEach(async () => {
    createdNews = await NewsModel.create({
      title: 'New News',
      imageURL: 'url',
      content: 'Content of the new news',
      date: '2012-03-01',
      user_Id: 1
    });
  });

  
  afterAll(async () => {
    await NewsModel.destroy({ where: { id: createdNews.id } });
  });

  test('Put response should be an object and return status 201', async () => {
    // Utiliza el token de autenticación en la solicitud PUT
    const response = await api
      .put(`/api/news ${createdNews.id}`)
      .set('Authorization', `Bearer ${Token}`)
      .send({
        
        title: 'noticias',
        imageURL: 'url',
        content: 'una cosa',
        date: '2012-03-01',
        user_Id: 1 
      });

    expect(typeof response).toBe('object');
    expect(response.status).toBe(201);
  });
});

afterAll(async () => {
  server.close();
  await connection_db.sync({ force: true });
  console.log('All databases are clean');
});
