import {useEffect} from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../context/UserContext';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { setIsAuthenticated, isAuthenticated, setIdUser, setRol } = useUserContext();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
 }, [isAuthenticated, navigate]);



  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);
      console.log(response)
      const {token, rol, id_user} = response.SesionData;
      localStorage.setItem('token', token);
      localStorage.setItem('rol', rol);
      localStorage.setItem('id_user', id_user);
      setIsAuthenticated(true);
      setIdUser(id_user);
      setRol(rol);
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form className="register" onSubmit={handleSubmit(onSubmit)}>
        <input type="email" name='email' {...register('email',{ required: true })} className="register_email" placeholder="Email" required/>
        {errors.email && <p className="error-message">Por favor, añade un email</p>}
        <input type="password" name='password' {...register('password',{ required: true })} className="register_password" placeholder="Password" required/>
        {errors.password && <p className="error-message">La contraseña es necesaria</p>}
        <button type="submit">Login</button>
      </form>
      <div className="formulary_text">
                <h3 className="login_option">¡Logeate y crea las mejores noticias tech!</h3>
                <button className='register_option_changer'>Aún no tengo una cuenta</button>
      </div>
    </div>
  );
};

export default Login;