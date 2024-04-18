import SocialBox from '../../components/SocialBox/SocialBox';
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  return (
      <div className='home_container'>
          {/* <div className="news_carrousel"></div> */}
            <div className="slogan">
              <h3 className='tittle_1'>THE BEST</h3>
              <h1 className='tittle_2'>TECH NEWS</h1>
              <div className="color_back"></div>
              <div className="blur_effect"></div>
            </div>
            <div className="social_container">
          <SocialBox/>
          </div>
      </div>
  )
}

export default Home