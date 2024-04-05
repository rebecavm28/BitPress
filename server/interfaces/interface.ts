import { Request, Response } from 'express';
export interface User{
    id_user?: number;
    name: string;
    email: string,
    rol?: number
}
export interface UserAttributes{
    id_user?: number;
    name: string;
    email: string,
    password: string,
    rol?: number
}
export interface SesionData{
    id_user?: number;
    rol?: number;
    token:string; 
}

interface News {
    id: number;
    title: string;
    imageUrl: string;
    content: string;
    date: Date;
    user: number;
}

interface NewsRequestBody {
    title?: string;
    imageUrl?: string;
    content?: string;
    date?: Date;
    user?: number;
}
