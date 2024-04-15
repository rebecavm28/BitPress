import '../Navbar/Navbar.css'
import logo from '../../assets/images/logo_negro.png'
import texto from '../../assets/images/texto_logo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav>
    <div className="logo_container" onClick={() => navigate(`/`)} >
      <img src={logo} alt="" className='image1'/>
      <img src={texto} alt="" className='image2'/>
    </div>
    <ul className='list_box'>
    <li><button className='navbar_link violet' onClick={() => navigate('/login')}>Login</button></li>
        <li><button className='navbar_link cream' onClick={() => navigate('/register')}>Register</button></li>
    </ul>
  </nav>
  )
}

export default Navbar