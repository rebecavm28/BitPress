import { verifyToken } from "../utils/jwt";
import { Request, Response, NextFunction} from "express";


declare global {
 namespace Express {
    interface Request {
      userId?: number; // Añade la propiedad userId a la interfaz Request
    }
 }
}

export const isAuthenticated = async  (request:Request, response:Response, next:NextFunction) =>{
    const token = request.headers.authorization?.split(" ").pop();
    if(!token){
        return response.status(401).json({message:"No token provided"});
    }
    try {
       const dataToken:any = await verifyToken(token);
       /* console.log(dataToken) */
       request.userId = dataToken.id;
       /* request.body.user = await UserModel.findByPk(dataToken.id); */
       next(); 
    } catch (error) {
       return response.status(401).json({message:"Invalid Token!"})
    }
}
