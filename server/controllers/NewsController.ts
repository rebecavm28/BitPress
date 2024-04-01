import NewModel from "../models/NewModel";
import e, { request, response } from "express";

export const getNews = async (req: typeof request, res: typeof response) => {
    try {
        const news = await NewModel.findAll({});
        res.status(201).json(news);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const createNews = async (req: typeof request, res: typeof response) => {
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

export const updateNews = async (req: typeof request, res: typeof response) => {
    try {
        if (req.body) {
            const news = await NewModel.update(req.body, { where: { id: req.params.id } });
            res.status(201).json(news);
        } else {
            res.status(400).json({ message: "Invalid request body" });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteNews = async (req: typeof request, res: typeof response) => {
    try {
        const news = await NewModel.destroy({ where: { id: req.params.id } });
        res.status(201).json(news);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const showOneNews = async (req: typeof request, res: typeof response) => {
    try {
        const news = await NewModel.findOne({ where: { id: req.params.id } });
        res.status(201).json(news);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}