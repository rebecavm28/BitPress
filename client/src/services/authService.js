import axios from 'axios';
export const url = 'http://localhost:5000/api/';


export const login = async (data) => {

 try {
   const response = await axios.post(`${url}/users/login`, data);
   console.log(response.data.token)
   return response.data
 } 
 catch (error) {
    console.error('Error de login:', error.message);
    throw error;
 }
};

export const registerUser = async (sesiondata) => {
  try{ 
    const response = await axios.post(`${url}/users/register`, sesiondata)
    if (response.sesiondata.token){
    console.log(data)
    }
  }
   catch (error){
    console.log('Error al crear la cuenta: ', error);
  }
}