import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import { getNewById } from '../../services/newServices'
import './Detail.css';
import { deleteData } from "../../services/newServices";
import { useNavigate } from "react-router";


const Detail = () => {
  const { id_news } = useParams();
    const [ data, setData ] = useState(null);
      const navigate = useNavigate()

      
      useEffect(() => {
        const fetchData = async () =>{
            const response = await getNewById(id_news); 
             setData(response); 
        }
        fetchData()
    }, [id_news]);


return (
  <div>
    {data ? (<div className="chargingBox" key={data.id}>
        <h2 className="titleNew">{data.tittle}</h2>
        <img className="imgNew" src={data.imageUrl}/>
      <div className="subtitles">
        <p><span className="author">User : </span>{data.user}<span className="date"> | Date : </span> {new Date(data.date).toLocaleDateString()}
          </p>
        <h3 className="subDescrip">DESCRIPTION:</h3>
        <div className="description">
          <p>{data.content}</p></div>
        <div className='buttons'>
          <button className="bEdit">EDIT</button>
          <button onClick={() => {deleteData(`${id_news}`); navigate("/dashboard")}} className="bDelete">DELETE</button>
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