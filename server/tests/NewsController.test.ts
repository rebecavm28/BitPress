import request from 'supertest';
import {app} from '../app';



const api = request(app);


describe('Crear Noticia', () => {

    test('debería devolver noticias', async () => {
    const response = await request(app).get('/news');
    console.log(response); // Imprime la respuesta para verificar su contenido
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('noticias');
  });
})