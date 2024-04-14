<<<<<<< HEAD
// import NewModel from "../models/NewModel"
// import { Request, Response } from "express";

// export async function getNews(res: Response) {
//     try {
//         const news = await NewModel.findAll({});
//         res.status(200).json(news);
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// }

// export const createNews = async (req: Request, res: Response) => {
//     try {
//         if (req.body) {
//             const news = await NewModel.create(req.body);
//             res.status(201).json(news);
//         } else {
//             res.status(400).json({ message: "Invalid Request body" });
//         }
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// }

// export async function updateNews(req: Request, res: Response) {
//     try {
//         const id_news = req.params.id_news;
//         if (req.body && id_news) {
//             const news = await NewModel.update(req.body, { where: { id: id_news } });
//             if (news[0] === 0) {
//                 res.status(404).json({ message: "News not found" });
//             } else {
//                 res.status(200).json({ message: "News updated successfully" });
//             }
//         } else {
//             res.status(400).json({ message: "Invalid request body or missing id_news parameter" });
//         }
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// }

// export const deleteNews = async (req: Request, res: Response) => {
//     try {
//         const news = await NewModel.destroy({ where: { id: req.params.id_news } });
//         if (news) {
//             res.status(200).json({ message: "News deleted successfully" });
//         } else {
//             res.status(404).json({ message: "News not found" });
//         }
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// }

// export const showOneNews = async (req: Request, res: Response) => {
//     try {
//         const news = await NewModel.findOne({ where: { id: req.params.id_news } });
//         if (news) {
//             res.status(200).json(news);
//         } else {
//             res.status(404).json({ message: "News not found" });
//         }
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// }
=======
import { SesionData } from "../interfaces/interface";
import NewsModel from "../models/NewModel";
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
>>>>>>> develop
