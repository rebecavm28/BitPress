import UserModel from "../models/UserModel";
import { Request, Response } from "express";
import { bcrypt} from "bcrypt";

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

export const deleteUsers= async(request: Request, response: Response)=>{
  const idUser = request.params.id;
  try {
    await UserModel.destroy({where:{id:idUser}});
    return response.status(201).json({message: 'the note has deleted correctly'})
  } catch (error) {
    return response.status(500).json({message:'error to delete the note', error: error.message})
  }
}

export const updateUsers = async(request: Request, response: Response)=>{
  const idUser =request.params.id;
  try {
    await UserModel.update(request.body,{where:{id:idUser}});
    return response.status(200).json({message:'The Note was updated successfully!'});
  } catch (error) {
    return response.status(500).json({message:'error to update the note', error: error.message})
  }
}

export const  showOneUsers = async(request:Request,response:Response)=> {  //para que traiga una sola//
  const idUser =request.params.id;
  try {
    const oneNew = await UserModel.findOne({where: {id:Number(idUser)}});
    return response.status(200).json(oneNew);
  } catch (error) {
    return response.status(500).json({message:'error to show the', error: error.message})
  }
}

export const registerUser = async ( request :Request ,response:Response)=>{
  try { 
      const{email,name, password} = request.body;//extraemos name , email y password
      //encriptar contraseña:
      const hashedPassword = await bcrypt.hash(password, 10);   //2 parametros la contraseña y las vueltas //
      const userData = {email, name, password: hashedPassword};    //que te hashed la contraseña//
      await UserModel.create(userData);  //aqui le dices cogeme los datos del userdata y creamelo//
      response.status(201).json({message: "user created correctly"})
    } catch (error) {
       return response.status(500).json({message: 'Error on creating user', error: error.message});
    }
}

//login//
 
export const login = async (req:Request, res:Response) => {
 try {
  const { email, password } = req.body;
    // Buscar al usuario por su correo electrónico
    const user = await UserModel.findOne({ where: { email } });

    // Verificar si el usuario existe
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    // Verificar si la contraseña es correcta
    const passwordMatch = await bcrypt.compare(password, hashedPassword);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
  } catch (error) {
    return res.status(500).json({message: 'error login', error: error.message});
 }
}
