import React from 'react';
import '../Navbar/Navbar.css';
import logo from '../../assets/images/logo_negro.png';
import texto from '../../assets/images/texto_logo.png';
import { useUserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../Logout-butoon/logout-button';

const Navbar = () => {
  const { isAuthenticated } = useUserContext();
  const navigate = useNavigate();
  
  return (
    <nav>
      <div className="logo_container" onClick={() => navigate(`/dashboard`)}>
        <img src={logo} alt="" className='image1'/>
        <img src={texto} alt="" className='image2'/>
      </div>
      <div className="list_box">
        {isAuthenticated ? (
          <LogoutButton />
        ) : (
          <div className="buttons_nav">
            <button className='navbar_link violet' onClick={() => navigate('/login')}>Login</button>
            <button className='navbar_link cream' onClick={() => navigate('/register')}>Register</button>
          </div>
        )}
      </div> 
    </nav>
  );
};

export default Navbar;
