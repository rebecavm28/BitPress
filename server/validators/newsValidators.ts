import { check} from "express-validator";
import  {validateResult}  from '../helpers/validationHelper';
import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';


const NewsSchema = z.object({
    /* id_news: z.number().int().positive(), */
    tittle: z.string().min(3, 'El título debe tener al menos 3 caracteres.'),
    imageUrl: z.string().max(500, 'La URL de la imagen debe tener como máximo 500 caracteres.🥶'),
    content: z.string().min(10, 'El contenido debe tener al menos 10 caracteres.'),
    date: z.date(),
    user: z.number().int().positive()
});

// Tipo de datos para las noticias
type News = z.infer<typeof NewsSchema>;

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
        throw new Error('Error de validación: ' + (error as Error).message);
        // Devolvemos un objeto vacío si la validación falla
        return {} as News;
    }
}


export const newsValidator =[
    check('tittle').exists().notEmpty().withMessage('The Title is required')
    .isLength({ max: 100 }).withMessage('Title must be less than 100 characters'),
    check('imageUrl').exists().notEmpty().withMessage('The image is required').isURL().withMessage('The image URL is not valid'),
    check('content').exists().notEmpty().withMessage('The content is required')
    .isLength({ max: 5000 }).withMessage('Content must be less than 5000 characters'),
    check('date').exists().withMessage('The date is required')
    .isISO8601().withMessage('Date must be in yyyy-mm-dd format'),
        validateResult
]