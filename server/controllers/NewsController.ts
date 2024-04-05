import NewModel from "../models/NewModel";
import e, { Request, Response } from "express";
export const getNews = async (req:  Request, res:  Response) => {
    try {
        const news = await NewModel.findAll({});
        res.status(201).json(news);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const createNews = async (req: Request, res: Response) => {
    try {
        if (req.body) {
            const news = await NewModel.create(req.body);
            res.status(201).json(news);
        } else {
            res.status(400).json({ message: "Invalid Request body" });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

interface NewsRequestBody {
    // Define the properties of the request body here
}

export const updateNews = async (req: Request<any, any, NewsRequestBody>, res: Response) => {
    try {
        if (req.body) {
            const news = await NewModel.update(req.body, { where: { id: req.params.id_news } });
            res.status(201).json(news);
        } else {
            res.status(400).json({ message: "Invalid Request body" });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteNews = async (req: Request, res: Response) => {
    try {
        const news = await NewModel.destroy({ where: { id: req.params.id } });
        res.status(201).json(news);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const showOneNews = async (req: Request, res: Response) => {
    try {
        const news = await NewModel.findOne({ where: { id: req.params.id } });
        res.status(201).json(news);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}