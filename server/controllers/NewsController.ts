import NewsModel from "../models/NewsModel";
import { Request, Response } from "express";

export const getAllNews = async(request: Request, response: Response )=>{
  try {
    const news = await NewsModel.findAll()
    response.status(200).json(news);
  } catch (error) {
    response.status(500).json({message:error.message})
  }  
}

export const createNews = async(request: Request, response: Response)=>{
    try {
    /* const id_user = request.body.user.id;
       const data = {}  */
       const createNew = await NewsModel.create()
       response.status(201).json({message: "new created correctly"})
    } catch (error) {
        
    }
}