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