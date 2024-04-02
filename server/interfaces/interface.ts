export interface User{
    id_user?: number;
    name: string;
    email: string,
    password: string;
    role?: string
}
export interface SesionData{
    id_user?: number;
    role?: string;
    token:string; 
}