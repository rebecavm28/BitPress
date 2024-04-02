import { verifyToken } from "../utils/jwt";
import UserModel from "../models/UserModel";
import { Request, Response, NextFunction} from "express";

export const isAuthenticated = async  (request:Request, response:Response, next:NextFunction) =>{
    const token = request.headers.authorization?.split(" ").pop();
    if(!token){
        return response.status(401).json({message:"No token provided"});
    }
    try {
       const dataToken:any = await verifyToken(token);
       request.body.user = await UserModel.findByPk(dataToken.id);
       if(dataToken.rol !== 1){
        return response.status(403).json({message: "You do not have permission to access this resource"})
       }
       next(); 
    } catch (error) {
       return response.status(401).json({message:"Invalid Token!"})
    }
}



/* export const isAuthenticated = async (request: Request, response: Response, next: NextFunction) => {  
    const token = request.headers.authorization?.split(" ").pop();
    if (!token){return response.status(401).json({ message: "You are not logged in" });} 
    try {
        if(!request.headers.authorization){
            return response.status(401).json({message:"You are not logged in"});
        }
       const dataToken:any  = await verifyToken(token!);
       const userId = <number> dataToken.id
       if(!userId){
        return response.status(401).send('Invalid Token')
       }
       const  user = await UserModel.findByPk(dataToken.id)
       request.body.user = user
       next()
    } catch (error) {
       return response.status(401).send('Forbidden');
    }
} */