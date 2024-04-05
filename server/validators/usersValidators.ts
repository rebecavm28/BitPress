import { z } from 'zod';

//USERSMODEL

// Definir el esquema 
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

// Tipo de datos para los usuarios
export type User = z.infer<typeof UserSchema>;

// Función para validar un usuario
export function validateUser(data: unknown): User {
    try {
        // Intentamos analizar los datos proporcionados
        const validUser = UserSchema.parse(data);
        // Si pasa la validación, devolvemos el usuario válido
        return validUser;
    } catch (error) {
        // Capturamos cualquier error de validación
        console.error('Error de validación:', (error as Error).message);
        // Devolvemos un objeto vacío si la validación falla
        return {} as User;
    }
}

//USER CREDENTIALS
// Definir el esquema de validación para las credenciales de usuario
export const UserCredentialsSchema = z.object({
    email: z.string().email('El email proporcionado no es válido. 🥶'),
    password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres.')
});

// Tipo de datos para las credenciales de usuario
export type UserCredentials = z.infer<typeof UserCredentialsSchema>;

// Función para validar las credenciales de un usuario
export function validateUserCredentials(data: unknown): UserCredentials {
    try {
        // Intentamos analizar los datos proporcionados
        const validCredentials = UserCredentialsSchema.parse(data);
        // Si pasa la validación, devolvemos las credenciales válidas
        return validCredentials;
    } catch (error) {
        // Capturamos cualquier error de validación
        console.error('Error de validación:', (error as Error).message);
        // Devolvemos un objeto vacío si la validación falla
        return {} as UserCredentials;
    }
}

