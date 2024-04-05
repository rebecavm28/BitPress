import React from 'react'
import './UserFrom.css'

const UserForm = () => {
  return (
    <div className='formulary_section'>
        <div className="formulary">

            <div className="formulary_text">
                <h3 className="login_option">¡Logeate y crea las mejores noticias tech!</h3>
                <button className='login_option_changer'>Aún no tengo cuenta</button>
                <h3 className="registrer_option">¿Quieres  ser miembro de nuestra web de noticias?</h3>
                <button className='registrer_option_changer'>Ya tengo una cuenta</button>
            </div>


            <div className="register">
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Password'/>
            </div>

            <div className="login">
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Password'/>
            </div>

        </div>

        <div className="social">
            <a className='social_links' href="http://" target="_blank" rel="noopener noreferrer">Instagram/Bitpress</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">Linkedin/Bitpress</a>
        </div>
    </div>
  )
}

export default UserForm