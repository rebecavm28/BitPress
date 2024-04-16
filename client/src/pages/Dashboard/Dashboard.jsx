import './Dashboard.css'
import NewsGallery from '../../components/Gallery/NewsGallery'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();

  return (
      <div className='home_container'>
        <main className='contain_sup_dash'>
          <div className="slogan_dash">
              <h3 className='tittle_1_dash'>THE BEST</h3>
              <h1 className='tittle_2_dash'>TECH NEWS</h1>
              <div className="color_back_dash"></div>
              <div className="blur_effect_dash"></div>
            </div>
           <div className="circle_button">
            <h2 className='button_letters' onClick={() => navigate(`add`)} >AÑADIR NOTICIA</h2>
          </div>
        </main>
        <NewsGallery />
      </div>
    )
  }

export default Dashboard;