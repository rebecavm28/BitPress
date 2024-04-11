import axios from 'axios';
export const url = 'http://localhost:5000/api/';


export const login = async (data ) => {

 try {
   const response = await axios.post(`${url}users/login`, data);
   return response.data
 } 
 catch (error) {
    console.error('Error de login:', error.message);
    throw error;
 }
};

export const registerUser = async (data) => {
  try{ 
    const response = await axios.post(`${url}users/register`, data)
    return response.data
  }
   catch (error){
    console.log('Error al crear la cuenta: ', error);
  }
}