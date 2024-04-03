import './NewsGallery.css'
import New from '../New/New';
import { useLoaderData } from 'react-router-dom'

const NewsGallery = () => {
    const news = useLoaderData();

  return (
    <div className='news_container'>
        <New news={news}/>
    </div>
  )
}

export default NewsGallery