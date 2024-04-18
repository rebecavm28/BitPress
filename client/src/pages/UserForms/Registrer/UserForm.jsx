import './UserFrom.css'
import { useForm} from 'react-hook-form'
import { registerUser } from '../../../services/authService'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../../context/UserContext'

const UserForm = () => {
const navigate = useNavigate();
const { setIsAuthenticated } = useUserContext();

  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = async (data) =>{
    try {
        const response = await registerUser(data);
        console.log(response)
        const {token, rol} = response.sesiondata;
        localStorage.setItem('token', token);
        localStorage.setItem('rol', rol);
        setIsAuthenticated(true);
        navigate('login');
    } catch (error) {
        console.error(error)
    }
  }

  return (
    <div className='formulary_section'>
        <div className="formulary">

            <div className="formulary_text">
                <h3 className="registrer_option">¿Quieres  ser miembro de nuestra web de noticias?</h3>
                <button className='registrer_option_changer' >Ya tengo una cuenta</button>
            </div>


            <form className="register" onSubmit={handleSubmit(onSubmit)}>
                <input name='name' type='text'{...register('name', { 
        required: "El nombre es requerido",
        pattern: {value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/i,
          message: "El nombre es requerido"
        }
      })} className="register_name" placeholder="Name" required/>
            {errors.name && <p className="error-message">{errors.name.message}</p>}

                <input type="email" name='email' {...register('email',{ 
        required: "El correo electrónico es requerido",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: "El correo electrónico no es válido"
        }
      })} className="register_email" placeholder="Email" required/>
            {errors.email && <p className="error-message">{errors.email.message}</p>}

            <input type="password" name='password' {...register('password', { 
        required: "La contraseña es requerida",
        minLength: {
          value: 2,
          message: "La contraseña debe tener al menos 2 caracteres"
        }
      })} className="register_password" placeholder="Password" />
      {errors.password && <p className="error-message">{errors.password.message}</p>}

                <button type="submit">Register</button>
            </form>
        </div>
    </div>
  )
}
export default UserForm