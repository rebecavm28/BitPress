import { JWT_SECRET } from '../config';
import * as jwt from 'jsonwebtoken'; // Add missing import statement

export const createToken = async (user: any) => {
    const token = jwt.sign(
        {
            id: user.id,
            rol: user.rol
        },
        JWT_SECRET || '', // Provide a default value for JWT_SECRET
        { expiresIn: "2h" }
    );
    return token;
}

export const verifyToken = async (tokenJwt: string) => {
    try {
        return jwt.verify(tokenJwt, JWT_SECRET || ''); // Provide a default value for JWT_SECRET
    } catch (error) {
        return null;
    }
}