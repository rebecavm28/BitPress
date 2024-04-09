
import './UserFrom.css'
// import instagram_logo from '../../assets/svg/instagramCream.svg'
// import linkedin_logo from '../../assets/svg/linkedinCream.svg'
const UserForm = () => {
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
<input type="text" className="register_username" placeholder="Username" required/>
<input type="email" className="register_email" placeholder="Email" required/>
<input type="password" className="register_password" placeholder="Password" required/>
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
{/* <img className='social_logo' src={instagram_logo} alt="instagram logo" />
<a className='social_links' href="http://" target="_blank" rel="noopener noreferrer">Instagram/Bitpress</a>
</div>
<div className="linkedin_box">
<img className='social_logo' src={linkedin_logo} alt="linkedin logo" /> */}
<a className='social_links' href="http://" target="_blank" rel="noopener noreferrer">Linkedin/Bitpress</a>
</div>
</div>
</div>
)
}
export default UserForm