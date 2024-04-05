import { verifyToken } from "../utils/jwt";
import { Request, Response, NextFunction} from "express";
import {IdUser} from '../interfaces/interface'


export const isAuthenticated = async  (request:Request, response:Response, next:NextFunction) =>{
    const token = request.headers.authorization?.split(" ").pop();
    if(!token){
        return response.status(401).json({message:"No token provided"});
    }
    try {
       const dataToken:any = await verifyToken(token);
       console.log(dataToken)
       const res=  request.body.userId = dataToken.id;
       console.log(res)
       /* const user : IdUser ={
         id_user: dataToken.id,
       } */
       next(); 
    } catch (error) {
       return response.status(401).json({message:"Invalid Token!"})
    }
}
