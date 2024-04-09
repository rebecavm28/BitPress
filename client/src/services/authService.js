import axios from 'axios';
import { url } from './userServices';


export const login = async (variableForm ) => {

 try {
   const response = await axios.post(`${url}`, variableForm);
   localStorage.setItem('token', response.data.token);
   console.log(response.data.token)
   return response.data
 } 
 catch (error) {
    console.error('Error de login:', error.message);
    throw error;
 }
};

export const Registrer = async (formData) => {
  try{ 
    const response = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  
   if (!response.ok) {
    throw new Error('Error al crear la cuenta');
   }
  
  } catch (error){
    console.log('Error al crear la cuenta: ', error);
  }
}