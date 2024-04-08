import request from 'supertest';
import {app} from '../app';
import NewsModel from '../models/NewsModel';



const api = request(app);



//  describe('PUT', () => {
//     let createdNews = {};
//     beforeEach(async ()=> {
//         createdNews = await NewsModel.create({
//           titulo: 'Nueva Noticia',
//           imageURL:'url',
//           contenido: 'Contenido de la nueva noticia',
//           date:'2012-03-01',
//           id_user:1
//         })
//         test('debería devolver noticias', async () => {
//           const response = await request(app).get('/news');
//           console.log(response); // Imprime la respuesta para verificar su contenido
//           expect(response.status).toBe(200);
//           expect(response.body).toHaveProperty('noticias');

//     })
// })})