import React from 'react'
import './Dashboard.css'
import NewsGallery from '../../components/Gallery/NewsGallery'
import { useNavigate } from 'react-router-dom'
/* import Login from '../../components/UserForms/Login/Login'
 */
const Dashboard = () => {

  const navigate = useNavigate();

  return (
      <div className='home_container'>
        <main>
          <div className="circle_button">
            <h2 className='button_letters' onClick={() => navigate(`/add`)} >AÑADIR NOTICIA</h2>
          </div>
        </main>
        <NewsGallery />
        {/* <Login/> */}
      </div>
    )
  }

export default Dashboard;