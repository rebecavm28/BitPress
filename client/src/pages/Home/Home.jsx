import SocialBox from '../../components/SocialBox/SocialBox';
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  return (
      <div className='home_container'>
          {/* <div className="news_carrousel"></div> */}
            <div className="slogan">
              <h3 className='home_tittle_1'>THE BEST</h3>
              <h1 className='home_tittle_2'>TECH NEWS</h1>
              <div className="home_color_back"></div>
              <div className="home_blur_effect"></div>
            </div>
            <div className="home_socialbox">
          <SocialBox/>
          </div>
      </div>
  )
}

export default Home