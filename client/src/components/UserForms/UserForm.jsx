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


            <form class="register">
                <input type="text" className="register_username" placeholder="Username" required/>
                <input type="email" className="register_email" placeholder="Email" required/>
                <input type="password" className="register_password" placeholder="Password" required/>
                <button type="submit">Register</button>
            </form>

            <form class="login">
                <input type="text" className="login_username" placeholder="Username" required/>
                <input type="password" className="login_password" placeholder="Password" required/>
                <button type="submit">Login</button>
            </form>

        </div>

        <div className="social">
            <a className='social_links' href="http://" target="_blank" rel="noopener noreferrer">Instagram/Bitpress</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">Linkedin/Bitpress</a>
        </div>
    </div>
  )
}

export default UserForm