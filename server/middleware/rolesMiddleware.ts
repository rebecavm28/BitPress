 import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export const rolAuthenticated =  (reqRol:string[]) => async(req: Request, res : Response, next: NextFunction) =>{
       const token = req.headers.authorization?.split(" ").pop();
 
   try{
      const dataToken:any = await verifyToken(token);
       const rolUser = dataToken.rol
        const rolesByUser = rolUser;
        console.log("dataToken:", dataToken);
        console.log("rolesByUser:", rolesByUser);
        console.log("reqRol:", reqRol);
        const checkValueRol = reqRol.some((rolSingle) => rolesByUser.includes(rolSingle))

        if(!checkValueRol){
         return res.status(401).json({msg:"No tienes permisos para acceder a esta ruta"})
        }

    }catch(error){
      console.log("Error en el middleware de autenticación por Rol", error);
    }
    next();
}
