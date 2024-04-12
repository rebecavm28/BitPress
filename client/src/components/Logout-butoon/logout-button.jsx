// Remove the unused import statement for React
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      // Limpiar el almacenamiento local
      localStorage.removeItem('token');
      localStorage.removeItem('rol');
      
      // Redireccionar al usuario a la página de inicio de sesión
      navigate('/login');
    };
  
    return (
      <button onClick={handleLogout}>Cerrar sesión</button>
    );
  };
  
  export default LogoutButton;