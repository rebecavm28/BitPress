let hashedPassword: string;
type IdUser = string

export interface LoginResponse {
    message: string;
    token: string;
    idUser: IdUser;
    return:string;

}
export interface UserAttributes{
        id?: number;
        name: string;
        email: string,
        password: string;
        id_rol?: string
    }

    const status: number = 200;



