import NewModel from "../models/NewModel"
import { Request, Response } from "express";

export async function getNews(res: Response) {
    try {
        const news = await NewModel.findAll({});
        res.status(200).json(news);
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
            res.status(400).json({ message: "Invalid request body" });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export async function updateNews(req: Request, res: Response) {
    try {
        const id_news = req.params.id_news;
        if (req.body && id_news) {
            const news = await NewModel.update(req.body, { where: { id: id_news } });
            if (news[0] === 0) {
                res.status(404).json({ message: "News not found" });
            } else {
                res.status(200).json({ message: "News updated successfully" });
            }
        } else {
            res.status(400).json({ message: "Invalid request body or missing id_news parameter" });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteNews = async (req: Request, res: Response) => {
    try {
        const news = await NewModel.destroy({ where: { id: req.params.id_news } });
        if (news) {
            res.status(200).json({ message: "News deleted successfully" });
        } else {
            res.status(404).json({ message: "News not found" });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const showOneNews = async (req: Request, res: Response) => {
    try {
        const news = await NewModel.findOne({ where: { id: req.params.id_news } });
        if (news) {
            res.status(200).json(news);
        } else {
            res.status(404).json({ message: "News not found" });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}