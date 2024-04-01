import UserModel from "../models/UserModel";
import { Request, Response } from "express";

export const getAllUsers = async(request: Request, response: Response )=>{
  try {
    const users = await UserModel.findAll()
    response.status(200).json(users);
  } catch (error: any) {
    response.status(500).json({message: error.message});
  }  
}

//Login
export const registerUser = async ( request :Request ,response:Response)=>{
  try {
    
  } catch (error) {
    
  }
}

//Registro
export const loginUser = async ( request :Request ,response:Response)=>{
  try {
    
  } catch (error) {
    
  }
}


export const createUser = async(request: Request, response: Response)=>{
   try { 
     await UserModel.create(request.body)
     response.status(201).json({message: "user created correctly"})
   } catch (error: any) {
     return response.status(500).json({message: 'Error on creating user', error: error.message});
   }
}

export const deleteUser = async(request: Request, response: Response)=>{
  const idUser = request.params.id;
  try {
    await UserModel.destroy({where:{id_user:idUser}});
    return response.status(201).json({message: 'the user has deleted correctly'})
  } catch (error: any) {
    return response.status(500).json({message:'error to delete user', error: error.message})
  }
}

export const updateUser = async(request: Request, response: Response)=>{
  const idUser =request.params.id;
  try {
    await UserModel.update(request.body,{where:{id_news:idUser}});
    return response.status(200).json({message:'The user was updated successfully!'});
  } catch (error: any) {
    return response.status(500).json({message:'error to update user', error: error.message})
  }
}

export const showOneNews = async(request: Request, response: Response) => {
  const idUser = request.params.id;
  try {
    const oneUser = await UserModel.findOne({ where: { id_user: Number(idUser) } });
    return response.status(200).json(oneUser);
  } catch (error: any) {
    return response.status(500).json({ message: 'error to show the user', error: error.message });
  }
}