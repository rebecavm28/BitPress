import './UserFrom.css'
import { useForm } from 'react-hook-form'
import { registerUser } from '../../../services/authService'
import { useNavigate } from 'react-router-dom'


const UserForm = () => {
const navigate = useNavigate();


  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = async (data) =>{
    try {
        const response = await registerUser(data);
        const {token, rol} = response.sesiondata;
        localStorage.setItem('token', token);
        localStorage.setItem('rol', rol);
        navigate('dashboard');
    } catch (error) {
        console.error(error)
    }
  }

  return (
    <div className='formulary_section'>
        <div className="formulary">

            <div className="formulary_text">
                {/* <h3 className="login_option">¡Logeate y crea las mejores noticias tech!</h3>
                <button className='login_option_changer'>Aún no tengo cuenta</button> */}
                <h3 className="registrer_option">¿Quieres  ser miembro de nuestra web de noticias?</h3>
                <button className='registrer_option_changer'>Ya tengo una cuenta</button>
            </div>


            <form className="register" onSubmit={handleSubmit(onSubmit)}>
                <input name='name' {...register('name')} className="register_username" placeholder="Username" required/>
                <input type="email" name='email' {...register('email')} className="register_email" placeholder="Email" required/>
                <input type="password" name='password' {...register('password')} className="register_password" placeholder="Password" required/>
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
  )
}
export default UserForm