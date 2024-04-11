import UserModel from "../models/UserModel";
import { Request, Response } from "express";
import * as bcrypt from 'bcrypt';
import {User, SesionData, UserAttributes} from '../interfaces/interface';
import { createToken } from "../utils/jwt";
import {Model} from 'sequelize'


//Registro
export const registerUser = async ( request :Request ,response:Response)=>{
  try { 
      const{email,name, password, rol} = request.body;//extraemos name , email y password
      //encriptar contraseña:
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = {email, name, password: hashedPassword, rol};
      const userData: Model<UserAttributes> = await UserModel.create(newUser);

    const user : User ={
      id_user: userData?.get('id_user') as number,
      name: userData?.get('name') as string,
      email: userData?.get('email') as string,
      rol: userData?.get('rol') as string
    }
    const sesiondata: SesionData={
      id_user: user.id_user,
      token: await createToken(userData),
    }
      return response.status(201).json({message: "user created correctly", sesiondata})
      
     } catch (error: any) {
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
     const rol=  oneUser?.get('rol') as string ;
     const isUser =  await bcrypt.compare(request.body.password, hashPassword );
     
     if (!isUser) {
        return response.status(401).json({auth: false, message: 'Wrong Password'});
     }
     const SesionData : SesionData ={
      id_user:idUser,
      rol:rol,
      token:await createToken(oneUser)
    }
   
     return response.status(200).json({message:"login correctly", SesionData});

  } catch (error: any) {
           return response.status(500).json({message: 'Error login', error: error.message});

  }
}

//////////

export const getAllUsers = async(request: Request, response: Response )=>{
  try {
    const users = await UserModel.findAll()
    response.status(200).json(users);
  } catch (error: any) {
    response.status(500).json({message: error.message});
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
    await UserModel.update(request.body,{where:{id_user:idUser}});
    return response.status(200).json({message:'The user was updated successfully!'});
  } catch (error: any) {
    return response.status(500).json({message:'error to update user', error: error.message})
  }
}

export const showOneNews = async (request: Request, response: Response) => {
  const idUser = request.params.id;
  try {
    const oneUser = await UserModel.findOne({ where: { id_user: Number(idUser) } });
    return response.status(200).json(oneUser);
  } catch (error: any) {
    return response.status(500).json({ message: 'error to show the user', error: error.message });
  }
}
