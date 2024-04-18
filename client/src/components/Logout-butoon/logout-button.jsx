import '../Navbar/Navbar.css'
import { useUserContext } from '../../context/UserContext';

const LogoutButton = () => {
  const { setUser, setIsAuthenticated } = useUserContext();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('id_user')
    
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <button className='navbar_link violet' onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;