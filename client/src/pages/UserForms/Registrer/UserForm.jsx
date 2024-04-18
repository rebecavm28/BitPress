import './UserFrom.css'
import { useForm } from 'react-hook-form'
import { registerUser } from '../../../services/authService'
import { useNavigate } from 'react-router-dom'
/* import { useUserContext } from '../../../context/UserContext'
 */
const UserForm = () => {
const navigate = useNavigate();
/* const { setIsAuthenticated } = useUserContext();
 */
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = async (data) =>{
    try {
        const response = await registerUser(data);
        console.log(response)
        const {token, rol} = response.sesiondata;
        localStorage.setItem('token', token);
        localStorage.setItem('rol', rol);
        /* setIsAuthenticated(true); */
        alert('Usuario creado correctamente ')
        navigate('/');
    } catch (error) {
        console.error(error)
    }
  }

  return (
    <div className='formulary_section'>
        <div className="formulary">

            <div className="formulary_text">
                <h3 className="registrer_option">¿Quieres  ser miembro de nuestra web de noticias?</h3>
                <button onClick={() => navigate(`/login`)} className='registrer_option_changer'>Ya tengo una cuenta</button>
            </div>


            <form className="register" onSubmit={handleSubmit(onSubmit)}>
                <input name='name' {...register('name', {required:true})} className="register_username" placeholder="Nombre" required/>
                <input type="email" name='email' {...register('email', {required:true})} className="register_email" placeholder="Email" required/>
                <input type="password" name='password' {...register('password', {required:true})} className="register_password" placeholder="Contraseña" required/>
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
  )
}
export default UserForm