import { z } from 'zod';

export const NewsSchema = z.object({
    id_news: z.number().int().positive(),
    tittle: z.string().min(1),
    imageUrl: z.string().max(500),
    content: z.string().min(1),
    date: z.date(),
    user: z.number().int().positive(),
})

export type News = z.infer<typeof NewsSchema>;

export function validateNews(data: unknown): News { 
    try {
        const invalidNews = NewsSchema.parse({
          id: 1,
          username: 'do', // Invalid: too short
          email: 'bad-email', // Invalid: not a valid email
        });
      } catch (error) {
        console.error('Validation error:', error.message);
      }
}
