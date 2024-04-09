import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import { getNewById } from '../../services/newServices'
import { getUserById } from '../../services/userServices';
import './Detail.css';

const Detail = () => {
  const { id_news } = useParams();
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async (id_news) =>{
      const newsResponse = await getNewById(id_news); 
      setData(newsResponse);
      
      if (newsResponse?.user) {
        const userResponse = await getUserById(newsResponse.user); 
        setUser(userResponse);
      }
    };
    fetchData();
  }, [id_news]);

  return (
    <div>
      {data && user ? (
        <div className="chargingBox">
          <h2 className="titleNew">{data.title}</h2>
          <img className="imgNew" src={data.imageUrl} alt="News Image" />
          <div className="subtitles">
            <p>
              <span className="author">Author: {user.name}</span>
              <span className="date"> | Date: {data.date}</span>
            </p>
            <h3 className="subDescrip">DESCRIPTION:</h3>
            <div className="description">
              <p>{data.content}</p>
            </div>
          </div>
          <div className='buttons'>
            <button className="bEdit">EDIT</button>
            <button className="bDelete">DELETE</button>
          </div>
        </div>
      ) : (
        <p>Charging news...</p>
      )}
    </div>
  );
};

export default Detail;