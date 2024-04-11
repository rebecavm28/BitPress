import axios from 'axios';
export const url = 'http://localhost:5000/api';


export const login = async (variableForm ) => {

 try {
   const response = await axios.post(`${url}`, variableForm);
   console.log(response.data.token)
   return response.data
 } 
 catch (error) {
    console.error('Error de login:', error.message);
    throw error;
 }
};

export const registerUser = async (data) => {
  try{ 
    const response = await axios.post(`${url}/users/register`, data)
    if (response.data.token){
    console.log('hola hola')
    }
  }
   catch (error){
    console.log('Error al crear la cuenta: ', error);
  }
}