import UserModel from "../models/UserModel";
import { Request, Response } from "express";

export const getAllUsers = async(request: Request, response: Response )=>{
  try {
    const users = await UserModel.findAll()
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json({message:error.message})
  }  
}

export const createUsers = async(request: Request, response: Response)=>{
    try {
      const users = await UserModel.create()
      
      response.status(200).json(users);  
    } catch (error) {
      response.status(500).json({message:error.message})  
    }
}

export const deleteNews = async(request: Request, response: Response)=>{
  const idNews = request.params.id;
  try {
    await UserModel.destroy({where:{id_news:idNews}});
    return response.status(201).json({message: 'the note has deleted correctly'})
  } catch (error) {
    return response.status(500).json({message:'error to delete the note', error: error.message})
  }
}

export const updateNews = async(request: Request, response: Response)=>{
  const idNews =request.params.id;
  try {
    await UserModel.update(request.body,{where:{id_news:idNews}});
    return response.status(200).json({message:'The Note was updated successfully!'});
  } catch (error) {
    return response.status(500).json({message:'error to update the note', error: error.message})
  }
}

export const  showOneNews = async(request:Request,response:Response)=> {  //para que traiga una sola//
  const idNews =request.params.id;
  try {
    const oneNew = await UserModel.findOne({where: {id_news:Number(idNews)}});
    return response.status(200).json(oneNew);
  } catch (error) {
    return response.status(500).json({message:'error to show the', error: error.message})
  }
}


