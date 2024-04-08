import { check } from "express-validator";
import  {validateResult}  from '../helpers/validationHelper';
import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';


export const NewsSchema = z.object({
    id_news: z.number().int().positive(),
    title: z.string().min(3, 'El título debe tener al menos 7 caracteres.'),
    imageUrl: z.string().max(500, 'La URL de la imagen debe tener como máximo 500 caracteres.🥶'),
    content: z.string().min(10, 'El contenido debe tener al menos 10 caracteres.'),
    date: z.date(),
    user: z.number().int().positive()
});

// Tipo de datos para las noticias
export type News = z.infer<typeof NewsSchema>;

// Función para validar una noticia
export function validateNews(data: unknown): News {
    try {
        // Intentamos analizar los datos proporcionados
        const validNews = NewsSchema.parse(data);
        // Si pasa la validación, devolvemos la noticia válida
        return validNews;
    } catch (error) {
        // Capturamos cualquier error de validación
        console.error('Error de validación:', (error as Error).message);
        // Devolvemos un objeto vacío si la validación falla
        return {} as News;
    }
}





export const newsValidator =[
    check('title').exists().notEmpty().withMessage('The Title is required'),
    check('imageUrl').exists().notEmpty().withMessage('The image is required'),
    check('content').exists().notEmpty().withMessage('The content is required'), 
    check('date').exists().withMessage('The date is required'),
    (request: Request, response: Response, next: NextFunction) =>{
        validateResult(request, response, next)
    } 
]