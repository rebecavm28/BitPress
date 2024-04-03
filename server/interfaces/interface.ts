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