import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  return (
      <div className='home_container'>
        <main>
            <div className="slogan">
              <h3 className='tittle_1'>THE BEST</h3>
              <h1 className='tittle_2'>TECH NEWS</h1>
              <div className="color_back"></div>
              <div className="blur_effect"></div>
            </div>
          <div className="circle_button">
          </div>
        </main>
      </div>
  )
}

export default Home