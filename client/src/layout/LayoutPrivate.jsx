import {Outlet, Navigate} from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
const LayoutPrivate = () => {
    const { isAuthenticated } = useUserContext();

    return( 
    <>
    <Navbar />
    {isAuthenticated ? <Outlet/> : <Navigate to = "/"/>}
    <Footer />
    </>
    );
}

export default LayoutPrivate;