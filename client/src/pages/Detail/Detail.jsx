import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import { getNewById } from '../../services/newServices'
import './Detail.css';

const Detail = () => {
  const { id_news } = useParams();
    const [ data, setData ] = useState(null);
  

      
      useEffect(() => {
        const fetchData = async () =>{
            const response = await getNewById(id_news); 
             setData(response); 
        }
        fetchData()
    }, [id_news]);


return (
  <div>
    {data ? (<div className="chargingBox">
        <h2 className="titleNew">{data.tittle}</h2>
        <img className="imgNew" src={data.imageUrl}/>
      <div className="subtitles">
        <p><span className="author">User : </span>{data.user}<span className="date"> | Date : </span>{data.date}</p>
        <h3 className="subDescrip">DESCRIPTION:</h3>
        <div className="description">
          <p>{data.content}</p></div>
        <div className='buttons'>
          <button className="bEdit">EDIT</button>
          <button className="bDelete">DELETE</button>
          {/* <button onClick={handleClick}>Edit</button>
          <button onClick={handleClick}>Delete</button> */}
        </div>
        </div>
      </div>
    ) : (
    <p>Charging news...</p>
    )}
  </div>
);
};


export default Detail;

