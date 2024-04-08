/* import { z } from 'zod';


const registerSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(6),
  rol: z.number().int(),
});

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});


export const registerUser = async (request: Request, response: Response) => {
    try {
        const input = registerSchema.parse(request.body);

    } catch (error) {
        return response.status(400).send({ message: (error as Error).message });
    }
};

export const loginUser = async (request: Request, response: Response) => {
    try {

    } catch (error) {
        return response.status(400).send({ message: (error as Error).message });
    }
}; */