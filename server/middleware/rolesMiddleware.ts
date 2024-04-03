import { Request, Response, NextFunction } from "express";
import UserModel from "../models/UserModel";
import { verifyToken } from "../utils/jwt";

declare global {
 namespace Express {
    interface Request {
      userRole?: number; // Añade la propiedad userRole a la interfaz Request
    }
 }
}
export const  rolAuthenticated = async (request: Request, response: Response, next: NextFunction)=>{
    const token = request.headers.authorization?.split(" ").pop();
    if(!token) return response.status(401).json({ msg: 'No token provided' });
    try {
        const dataToken:any = await verifyToken(token);
        const userRole = dataToken.rol;
       request.userRole = userRole;
       next();
    } catch (error) {
       return response.status(401).json({message:"Invalid token"}) 
    }
}