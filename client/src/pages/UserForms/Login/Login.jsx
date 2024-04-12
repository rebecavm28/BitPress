import React from 'react';
import './Login.css';
import UserForm from '../Registrer/UserForm'
import { loginUser } from '../../../services/authService'; // Cambio de nombre para evitar conflicto de nombres
import { useUserContext } from '../../../context/UserContext';
import { useNavigate } from "react-router-dom"; // "React-rout-dom" => "react-router-dom" (cambio en el nombre de la importación)

const Login = () => {
  const { register, handleSubmit } = UserForm();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useUserContext();

  const onSubmit = async (data) => { 
    try {
      const response = await loginUser(data);
      const {token, rol} = response.data.sesiondata;
      localStorage.setItem('token', token);
      localStorage.setItem('rol', rol);
      setIsAuthenticated(true);
      navigate('dashboard'); 
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
