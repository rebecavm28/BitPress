import { SesionData } from "../interfaces/interface";
import NewsModel from "../models/NewsModel";
import { Request, Response } from "express";
import {User} from '../interfaces/interface'
declare global {
 namespace Express {
    interface Request {
      userRole?: number; // Añade la propiedad userRole a la interfaz Request
    }
 }
}
export const getAllNews = async(request: Request, response: Response )=>{
  try {
    const news = await NewsModel.findAll()
    response.status(200).json(news);
  } catch (error) {
    response.status(500).json({message:error.message})
  }  
}

export const createNews = async(request: Request, response: Response)=>{
    /* const userRole = request.userRole;
    if (userRole !== 1) { // Asume que el rol 1 es de administrador
        return response.status(403).json({ message: "You do not have permission to perform this action" });
    } */
    try { 
      /* const userId = request.userId;
      if(!userId){
        return response.status(400).json({message: "no user"})
      } */
      const {id_user,user, ...rest}= request.body;
      if(!id_user){
        return response.status(400).json({message:"No se ha proporcionado el usuario"});}
       const createdNews = await NewsModel.create({...rest, user: id_user, id_user: user/* ...request.body, user:userId */});
       response.status(201).json({message: "new created correctly", body: createdNews})
    } catch (error) {
       return response.status(500).json({message: 'Error on creating new', error: error.message});
    }
}

export const deleteNews = async(request: Request, response: Response)=>{
  const idNews = request.params.id;
  const userRole = request.userRole;
    if (userRole !== 1) { // Solo los administradores pueden eliminar noticias
        return response.status(403).json({ message: "You do not have permission to perform this action" });
    }
  try {
    await NewsModel.destroy({where:{id_news:idNews}});
    return response.status(201).json({message: 'the note has deleted correctly'})
  } catch (error) {
    return response.status(500).json({message:'error to delete the note', error: error.message})
  }
}

export const updateNews = async(request: Request, response: Response)=>{
  const idNews =request.params.id;
  const userRole = request.userRole;
    if (userRole !== 1) { // Solo los administradores pueden editar noticias
        return response.status(403).json({ message: "You do not have permission to perform this action" });
    }
  try {
    await NewsModel.update(request.body,{where:{id_news:idNews}});
    return response.status(200).json({message:'The Note was updated successfully!'});
  } catch (error) {
    return response.status(500).json({message:'error to update the note', error: error.message})
  }
}

export const  showOneNews = async(request:Request,response:Response)=> {
  const idNews =request.params.id;
  try {
    const oneNew = await NewsModel.findOne({where: {id_news:Number(idNews)}});
    return response.status(200).json(oneNew);
  } catch (error) {
    return response.status(500).json({message:'error to show the', error: error.message})
  }
}