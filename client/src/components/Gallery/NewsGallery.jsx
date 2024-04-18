import './NewsGallery.css'
import New from '../New/New';
import { useLoaderData } from 'react-router-dom'

const NewsGallery = () => {
    const news = useLoaderData();

  return (
    <div className="gallery_container">
      {/* <div className="center"> */}
        {/* <div className='news_container'> */}
          <New news={news}/>
        {/* </div> */}
      {/* </div> */}
    </div>
  )
}

export default NewsGallery