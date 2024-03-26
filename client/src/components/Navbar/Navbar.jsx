import React from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/images/logo_negro.png'
import texto from '../../assets/images/texto_logo.png'


const Navbar = () => {
  return (
    <nav>

    <div className="logo_container">
      <img src={logo} alt="" className='image1'/>
      <img src={texto} alt="" className='image2'/>
    </div>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Acerca</a></li>
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
  )
}

export default Navbar