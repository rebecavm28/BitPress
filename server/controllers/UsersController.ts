import UserModel from "../models/UserModel";
import { Request, Response } from "express";
import * as bcrypt from 'bcrypt';

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
      const{email,name, password} = request.body;//extraemos name y password
      //encriptar contraseña:
      const hashedPassword = await bcrypt.hash(password, 10);
      const userData = {email,name, password: hashedPassword};
      await UserModel.create(userData);

/*       const{password, ...userData} = request.body;//extrae la password del curpo y crea un nuevo objeto userData con los demás datos.
      const hashedPassword = await bcrypt.hash(password,10);// bcrypt.hash es una función de bcrypt para encriptar la password, tiene que tener 2 argumentos, contraseña y rondas de hashing
      await UserModel.create({ ...userData, password: hashedPassword })//le pasa el objeto creado antes y password ya encriptado.
 */       response.status(201).json({message: "user created correctly"})
    } catch (error) {
       return response.status(500).json({message: 'Error on creating user', error: error.message});
    }
}

//Registro
export const loginUser = async ( request:Request , response:Response)=>{
  try {
     const{email, password} = request.body;//extraemos name y password
      //encriptar contraseña:
      const hashedPassword = await bcrypt.hash(password, 10);
      //quiero que le asigne automaticamente el rol 2, de usuario, en el nuevo objeto:
      const userData = {email, password: hashedPassword};
      await UserModel.create(userData);

  } catch (error) {
           return response.status(500).json({message: 'Error login', error: error.message});

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

