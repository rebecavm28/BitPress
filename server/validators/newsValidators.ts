// import { z } from 'zod';

// export const NewsSchema = z.object({
//     id_news: z.number().int().positive(),
//     tittle: z.string().min(1),
//     imageUrl: z.string().max(500),
//     content: z.string().min(1),
//     date: z.date(),
//     user: z.number().int().positive(),
// })

// export type News = z.infer<typeof NewsSchema>;

// // Función para validar una noticia
// export function validateNews(data: unknown): News {
//     try {
//         // Intentamos analizar los datos proporcionados
//         const validNews = NewsSchema.parse(data);
//         // Si pasa la validación, devolvemos la noticia válida
//         return validNews;
//     } catch (error) {
//         // Capturamos cualquier error de validación
//         console.error('Validation error:', error.message);
//         // Devolvemos un objeto vacío si la validación falla
//         return {} as News;
//     }
// }

import { z } from 'zod';

// Definir el esquema de validación para las noticias
export const NewsSchema = z.object({
    id_news: z.number().int().positive(),
    title: z.string().min(3, 'El título debe tener al menos 3 caracteres.'),
    imageUrl: z.string().max(500, 'La URL de la imagen debe tener como máximo 500 caracteres.'),
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
