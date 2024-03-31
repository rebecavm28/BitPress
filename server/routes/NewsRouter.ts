import * as express from 'express';
import { deleteNews, getAllNews, createNews, updateNews, showOneNews } from '../controllers/NewsController';


const newsRouter =  express.Router();

newsRouter.get('/news', getAllNews);
newsRouter.delete('/news/:id', deleteNews);
newsRouter.get('/news/:id', showOneNews);
newsRouter.post('/news', createNews);
newsRouter.put('/news/:id',updateNews);

export default newsRouter;
