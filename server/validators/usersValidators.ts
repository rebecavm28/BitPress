import { z } from 'zod';

//USERSMODEL

// Validad el schema del modelo de usuario
export const UserSchema = z.object({
    id_user: z.number().int().positive(),
    username: z.string().min(3, 'El nombre de usuario debe tener al menos 3 caracteres. 😁'),
    email: z.string().email('El email proporcionado no es válido. 🥶'),
    password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres.'),
    role: z.string().min(3, 'El rol debe tener al menos 3 caracteres.'),
    active: z.boolean(),
    created_at: z.date(),
    updated_at: z.date()
});
// Tipo de datos.
export type User = z.infer<typeof UserSchema>;
// Función
export function validateUser(data: unknown): User {
    try {
        const validUser = UserSchema.parse(data);
        return validUser;
    } catch (error) {
        console.error('Error de validación:', (error as Error).message);
        return {} as User;
    }
}

//USER CREDENTIALS
// Definir credenciales de usuario
export const UserCredentialsSchema = z.object({
    email: z.string().email('El email proporcionado no es válido. 🥶'),
    password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres.')
});

// Tipo de datos
export type UserCredentials = z.infer<typeof UserCredentialsSchema>;
// Función 
export function validateUserCredentials(data: unknown): UserCredentials {
    try {
        const validCredentials = UserCredentialsSchema.parse(data);
        return validCredentials;
    } catch (error) {
        console.error('Error de validación:', (error as Error).message);
        return {} as UserCredentials;
    }
}

