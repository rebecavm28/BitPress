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