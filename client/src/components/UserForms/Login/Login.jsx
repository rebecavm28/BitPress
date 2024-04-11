import React from 'react';
import './Login.css';
import UserForm from '../UserForm';
import { loginUser as loginForm } from '../services/authService'; // Cambio de nombre para evitar conflicto de nombres
import { useUserContext } from '../context/UserContext';
import { useNavigate } from "react-router-dom"; // "React-rout-dom" => "react-router-dom" (cambio en el nombre de la importación)

const Login = () => {
  const { register, handleSubmit } = UserForm();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useUserContext();

  const onSubmit = async (dataForm) => { // Cambio de nombre de la función para que coincida con el manejador del evento onSubmit
    try {
      const responseLogin = await loginForm(dataForm);
      localStorage.setItem('token', responseLogin.token);
      setIsAuthenticated(true);
      navigate('/dashboard'); // Cambio de 'dashborad' a 'dashboard'
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form className="register" onSubmit={handleSubmit(onSubmit)}> {/* Pasar onSubmit como el manejador del evento onSubmit */}
        <input type="email" name='email' {...register('email')} className="register_email" placeholder="Email" required/>
        <input type="password" name='password' {...register('password')} className="register_password" placeholder="Password" required/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Login;
