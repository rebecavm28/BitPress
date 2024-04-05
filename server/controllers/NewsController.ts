import { SesionData } from "../interfaces/interface";
import {NewsModel} from "../models/NewsModel";
import { Request, Response } from "express";

export const getAllNews = async(request: Request, response: Response )=>{
    try {
        const news = await NewsModel.findAll()
        response.status(200).json(news);
    } catch (error: any) {
        response.status(500).json({message: error.message});
    }  
}

export const createNews = async (req: Request, res: Response) => {
    try {
        const createdNews = await NewsModel.create(req.body);
        res.status(201).json(createdNews);
    }catch(error){
        return res.status(500).send({ error: 'Internal Server Error' });
    }
}

export const deleteNews = async(request: Request, response: Response)=>{
    const idNews = request.params.id;
    try {
        await NewsModel.destroy({where:{id_news:idNews}});
        return response.status(201).json({message: 'the note has deleted correctly'})
    } catch (error: any) {
        return response.status(500).json({message:'error to delete the note', error: error.message})
    }
}

export const updateNews = async(request: Request, response: Response)=>{
    const idNews =request.params.id;
    try {
        await NewsModel.update(request.body,{where:{id_news:idNews}});
        return response.status(200).json({message:'The Note was updated successfully!'});
    } catch (error: any) {
        return response.status(500).json({message:'error to update the note', error: error.message})
    }
}

export const showOneNews = async(request: Request, response: Response) => {
    const idNews = request.params.id;
    try {
        const oneNew = await NewsModel.findOne({ where: { id_news: Number(idNews) } });
        return response.status(200).json(oneNew);
    } catch (error: any) {
        return response.status(500).json({ message: 'error to show the', error: error.message });
    }
}
