// import { useNavigate } from 'react-router-dom';
// import { useUserContext} from '../../context/UserContext';

// const LogoutButton = () => {
//   const navigate = useNavigate();
//   const { user, setUser } = useUserContext(); // Desestructura tanto el estado del usuario como la función setUser

//   const handleLogout = () => {
//     try {
//       // Elimina los datos de sesión del almacenamiento local
//       localStorage.removeItem('token');
//       localStorage.removeItem('rol');
//       // Actualiza el estado del usuario a null
//       setUser(null);
//       navigate('/');
//     } catch (error) {
//       console.error('Error al cerrar sesión:', error);
//     }
//   };

//   return (
//     <button onClick={handleLogout}>Cerrar sesión</button>
//   );
// };

// export default LogoutButton;

import { useUserContext } from '../../context/UserContext';

const LogoutComponent = () => {
  const { setUser, setIsAuthenticated } = useUserContext();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutComponent;