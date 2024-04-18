import { check } from "express-validator";
import  {validateResult}  from '../helpers/validationHelper';
import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';


const NewsSchema = z.object({
    tittle: z.string().min(3, 'El título debe tener al menos 3 caracteres.'),
    imageUrl: z.string().max(500, 'La URL de la imagen debe tener como máximo 500 caracteres.🥶'),
    content: z.string().min(10, 'El contenido debe tener al menos 10 caracteres.'),
    date: z.date(),
    user: z.number().int().positive()
});

type News = z.infer<typeof NewsSchema>;

export function validateNews(data: unknown): News {
    try {
        const validNews = NewsSchema.parse(data);
        return validNews;
    } catch (error) {
        console.error('Error de validación:', (error as Error).message);
        throw new Error('Error de validación: ' + (error as Error).message);
        return {} as News;
    }
}





export const newsValidator =[
    check('tittle').exists().notEmpty().withMessage('The Title is required'),
    check('imageUrl').exists().notEmpty().withMessage('The image is required'),
    check('content').exists().notEmpty().withMessage('The content is required'), 
    check('date').exists().withMessage('The date is required'),
    (request: Request, response: Response, next: NextFunction) =>{
        validateResult(request, response, next)
    } 
]