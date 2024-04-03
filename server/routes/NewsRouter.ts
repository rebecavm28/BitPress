import * as express from 'express';
import { deleteNews, getAllNews, createNews, updateNews, showOneNews } from '../controllers/NewsController';
import { isAuthenticated } from '../middleware/authtenticalMiddleware';
import {rolAuthenticated} from "../middleware/rolesMiddleware"

const newsRouter =  express.Router();

newsRouter.get('/news',isAuthenticated, getAllNews);
newsRouter.delete('/news/:id',isAuthenticated,rolAuthenticated, deleteNews);
newsRouter.get('/news/:id',isAuthenticated, showOneNews);
newsRouter.post('/news',isAuthenticated, createNews);
newsRouter.put('/news/:id', isAuthenticated,rolAuthenticated, updateNews);

export default newsRouter;