import * as express from 'express';
import { deleteNews, getNews, createNews, updateNews, showOneNews } from '../controllers/NewsController';
// import { validateNews } from '../validators/newsValidators';
/* import { isAuthenticated } from '../middleware/authtenticalMiddleware';
 */

const newsRouter =  express.Router();

newsRouter.get('/news',/* isAuthenticated, */ getNews);
newsRouter.delete('/news/:id',/* isAuthenticated, */ deleteNews);
newsRouter.get('/news/:id',/* isAuthenticated, */ showOneNews);
newsRouter.post( '/news',/* isAuthenticated, */  createNews);
newsRouter.put('/news/:id', /* isAuthenticated, */  updateNews);

export default newsRouter;