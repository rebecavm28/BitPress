import UserModel from "../models/UserModel";
import { Request, Response } from "express";
import * as bcrypt from 'bcrypt';
import {User} from '../interfaces/interface';
import {Model} from 'sequelize'
import { sign } from "jsonwebtoken";
import {JWT_SECRET} from '../config'



//Registro
export const registerUser = async ( request :Request ,response:Response)=>{
  try { 
      const{email,name, password} = request.body;//extraemos name , email y password
      //encriptar contraseña:
      const hashedPassword = await bcrypt.hash(password, 10);
      const userData = {email, name, password: hashedPassword};
      await UserModel.create(userData);
      response.status(201).json({message: "user created correctly"})
    } catch (error) {
       return response.status(500).json({message: 'Error on creating user', error: error.message});
    }
}

//Login
export const loginUser = async ( request :Request ,response:Response)=>{
  
  try {
     const oneUser = await UserModel.findOne({where: {email: request.body.email}});
     if(!oneUser){
      return response.status(401).json({message:"User not found"});
     }
     const hashPassword = oneUser?.get("password") as string;
     const idUser = oneUser?.get("id_user") as number;
     const role=  oneUser?.get('rol') as number ;
     const isUser =  await bcrypt.compare(request.body.password, hashPassword );
     
     if (!isUser) {
        return response.status(401).json({auth: false, message: 'Wrong Password'});
     }
     const token = sign({id_user: idUser}, JWT_SECRET, { expiresIn: '3h' })
     return response.status(200).json({message:"login correctly", token,idUser,role});

  } catch (error) {
           return response.status(500).json({message: 'Error login', error: error.message});

  }
}

//////////

export const getAllUsers = async(request: Request, response: Response )=>{
  try {
    const users = await UserModel.findAll()
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json({message:error.message})
  }  
}
export const deleteUser = async(request: Request, response: Response)=>{
  const idUser = request.params.id;
  try {
    await UserModel.destroy({where:{id_user:idUser}});
    return response.status(201).json({message: 'the user has deleted correctly'})
  } catch (error) {
    return response.status(500).json({message:'error to delete user', error: error.message})
  }
}

export const updateUser = async(request: Request, response: Response)=>{
  const idUser =request.params.id;
  try {
    await UserModel.update(request.body,{where:{id_news:idUser}});
    return response.status(200).json({message:'The user was updated successfully!'});
  } catch (error) {
    return response.status(500).json({message:'error to update user', error: error.message})
  }
}

export const  showOneNews = async(request:Request,response:Response)=> {
  const idUser =request.params.id;
  try {
    const oneUser = await UserModel.findOne({where: {id_user:Number(idUser)}});
    return response.status(200).json(oneUser);
  } catch (error) {
    return response.status(500).json({message:'error to show the user', error: error.message})
  }
}