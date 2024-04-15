import * as express from 'express';
import { deleteNews, getAllNews, createNews, updateNews, showOneNews } from '../controllers/NewsController';
import {newsValidator, validateNews} from '../validators/newsValidators';
import { isAuthenticated } from '../middleware/authtenticalMiddleware';
import {rolAuthenticated} from "../middleware/rolesMiddleware"

const newsRouter =  express.Router();

newsRouter.get('/news',rolAuthenticated(["user","admin"]), getAllNews);
newsRouter.delete('/news/:id',isAuthenticated,rolAuthenticated(["admin"]), deleteNews);
newsRouter.get('/news/:id',isAuthenticated, rolAuthenticated(["user","admin"]), showOneNews);
newsRouter.post('/news',isAuthenticated, rolAuthenticated(["user","admin"]),newsValidator,/* validateNews, */ createNews);
newsRouter.put('/news/:id', isAuthenticated,rolAuthenticated(["admin"]), updateNews);

export default newsRouter;