import './Dashboard.css'
import NewsGallery from '../../components/Gallery/NewsGallery'
import { useNavigate } from 'react-router-dom'
import LogoutButton from '../../components/Logout-butoon/logout-button';

const Dashboard = () => {

  const navigate = useNavigate();

  return (
      <div className='home_container'>
        <main>
          <LogoutButton />
          <div className="circle_button">
            <h2 className='button_letters' onClick={() => navigate(`add`)} >AÑADIR NOTICIA</h2>
          </div>
        </main>
        <NewsGallery />
      </div>
    )
  }

export default Dashboard;