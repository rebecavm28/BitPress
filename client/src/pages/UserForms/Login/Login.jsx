import './Login.css';
import {useForm} from 'react-hook-form'; // "react-hook-form" => "react-hook-form" (cambio en el nombre de la importación)
import { loginUser } from '../../../services/authService'; // Cambio de nombre para evitar conflicto de nombres
import { useNavigate } from 'react-router-dom'; // "React-rout-dom" => "react-router-dom" (cambio en el nombre de la importación)
import { useUserContext } from '../../context/UserContext'; // Corregir la ruta de importación

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useUserContext();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);
      const { token, rol } = response.data.sesiondata;
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
      <form className="register" onSubmit={handleSubmit(onSubmit)}>
        <input type="email" name="email" {...register('email')} className="register_email" placeholder="Email" required/>
        <input type="password" name="password" {...register('password')} className="register_password" placeholder="Password" required/>
        <button type="submit">Register</button>
      </form>
      <div className="formulary_text">
        <h3 className="login_option">¡Logeate y crea las mejores noticias tech!</h3>
        <button className='registrer_option_changer'>Aún no tengo una cuenta</button>
      </div>
    </div>
  );
};

export default Login;