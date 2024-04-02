import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

export const  createToken = async (user:any) => {
    const  token = jwt.sign(
        {
            id: user.id,
            rol: user.rol
        },
        JWT_SECRET ,{ expiresIn: "2h"})
        return token;
}

export const  verifyToken = async (tokenJwt:any)=>{
    try {
       return jwt.verify(tokenJwt, JWT_SECRET) 
    } catch (error) {
       return null 
    }
}