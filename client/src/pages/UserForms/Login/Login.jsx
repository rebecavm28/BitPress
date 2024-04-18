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

<div className="Login"> 

      <div className="FormLogin">
         <form className="register" onSubmit={handleSubmit(onSubmit)}>

            <input type="email" name='email' {...register('email', { 
              required: "El correo electrónico es requerido",
              pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "El correo electrónico no es válido"
              }
            })} className="register_email" placeholder="Email" />
            {errors.email && <p className="error-message">{errors.email.message}</p>}

           <input type="password" name='password' {...register('password', { 
            required: "La contraseña es requerida",
            minLength: {
            value: 2,
            message: "La contraseña debe tener al menos 2 caracteres"
              }
            })} className="register_password" placeholder="Password" />
            {errors.password && <p className="error-message">{errors.password.message}</p>}

           <button type="submit">Login</button>

         </form>
      </div>

      <div className="formularyy">
        <div className="text_formulary">
          <h3 className="login_option">¡Logeate y crea las mejores noticias tech!</h3>
          <button className='login_option_changer' onClick={() => navigate('/register')}>Aún no tengo una cuenta</button>
        </div>
      </div>

    </div>

  )
};

export default Login;