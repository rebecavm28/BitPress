import * as express from 'express';
import { deleteNews, getAllNews, createNews, updateNews, showOneNews } from '../controllers/NewsController';
/* import { isAuthenticated } from '../middleware/authtenticalMiddleware';
 */

const newsRouter =  express.Router();

newsRouter.get('/news',/* isAuthenticated, */ getAllNews);
newsRouter.delete('/news/:id',/* isAuthenticated, */ deleteNews);
newsRouter.get('/news/:id',/* isAuthenticated, */ showOneNews);
newsRouter.post('/news',/* isAuthenticated, */ createNews);
newsRouter.put('/news/:id', /* isAuthenticated, */ updateNews);

export default newsRouter;