import React from 'react'
import './Home.css'
import NewsGallery from '../../components/Gallery/NewsGallery'
import UserForm from '../../components/UserForms/UserForm'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  return (
      <div className='home_container'>
        <main>
          {/* <div className="news_carrousel"></div> */}
            <div className="slogan">
              <h3 className='tittle_1'>THE BEST</h3>
              <h1 className='tittle_2'>TECH NEWS</h1>
              <div className="color_back"></div>
              <div className="blur_effect"></div>
            </div>
          <div className="circle_button">
            <h2 className='button_letters' onClick={() => navigate(`/add`)} >AÑADIR NOTICIA</h2>
          </div>
        </main>
        <NewsGallery />
        <UserForm/>
      </div>
  )
}

export default Home