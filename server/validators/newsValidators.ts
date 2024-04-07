import { check } from "express-validator";
import  {validateResult}  from '../helpers/validationHelper';
import { Request, Response, NextFunction } from 'express';

const newsValidator =[
    check('title').exists().notEmpty().withMessage('The Title is required'),
    check('imageUrl').exists().notEmpty().withMessage('The image is required'),
    check('content').exists().notEmpty().withMessage('The content is required'), 
    check('date').exists().isDate().withMessage('The date is required'),
    (req: Request, res: Response, next: NextFunction) =>{
        validateResult
    }
]

export default newsValidator;