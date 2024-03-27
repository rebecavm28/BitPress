import * as express from 'express';
import { getAllNews } from '../controllers/NewsController';


const newsRouter =  express.Router();

newsRouter.get('/news', getAllNews);

export default newsRouter;