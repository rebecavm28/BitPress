import React from 'react'
import axios from 'axios'
import './UserFrom.css'
import instagram_logo from '../../assets/svg/instagramCream.svg'
import linkedin_logo from '../../assets/svg/linkedinCream.svg'

const UserForm = () => {

//   Codigo JS para el formulario de registro

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   let animalData = new FormData();
   animalData = {...formData};

    try{ 
      const response = await fetch('http://localhost:3000/animals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(animalData)
      });
     navigate('/gallery');

     if (!response.ok) {
      throw new Error('Error al crear al animal');
     }

      Swal.fire('Animal creado exitosamente');


    } catch (error){
      console.log('Error al crear animal: ', error);
      Swal.fire('Error al crear el animal');
    }
  };
//   Fin de codigo JS para el formulario de registro

//   Codigo JS para el formulario de login

///////////////////////////

//   Fin de codigo JS para el formulario de registro

  return (
    <div className='formulary_section'>
        <div className="formulary">

            <div className="formulary_text">
                {/* <h3 className="login_option">¡Logeate y crea las mejores noticias tech!</h3>
                <button className='login_option_changer'>Aún no tengo cuenta</button> */}
                <h3 className="registrer_option">¿Quieres  ser miembro de nuestra web de noticias?</h3>
                <button className='registrer_option_changer'>Ya tengo una cuenta</button>
            </div>


            <form className="register">
                <input type="text" value={formData.name} className="register_username" placeholder="Username" required/>
                <input type="email" value={formData.email} className="register_email" placeholder="Email" required/>
                <input type="password" value={formData.password} className="register_password" placeholder="Password" required/>
                <button type="submit">Register</button>
            </form>

            <form className="login">
                <input type="text" className="login_username" placeholder="Username" required/>
                <input type="password" className="login_password" placeholder="Password" required/>
                <button type="submit">Login</button>
            </form>

        </div>

        <div className="social">
            <h2 className='social_tittle'>Siguenos en redes sociales</h2>
                <div className="instagram_box">
                    <img className='social_logo' src={instagram_logo} alt="instagram logo" />
                    <a className='social_links' href="http://" target="_blank" rel="noopener noreferrer">Instagram/Bitpress</a>
                </div>
                <div className="linkedin_box">
                    <img className='social_logo' src={linkedin_logo} alt="linkedin logo" />
                    <a className='social_links' href="http://" target="_blank" rel="noopener noreferrer">Linkedin/Bitpress</a>
                </div>
            </div>
    </div>
  )
}
export default UserForm