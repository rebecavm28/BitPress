import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from 'react';
import { getNewById, deleteData } from '../../services/newServices'; // Asumiendo que existe una función deleteData en tu servicio
import './Detail.css';
import { useUserContext } from "../../context/UserContext";

const Detail = () => {
  const { id_news } = useParams();
  const [ data, setData ] = useState(null);
  const navigate = useNavigate();
  const{id_user} = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNewById(id_news); 
        setData(response.data); 
        
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id_news]);

  return (
    <div>
      {data ? (
        <div className="chargingBox">
          <h2 className="titleNew">{data.tittle}</h2>
          <img className="imgNew" src={data.imageUrl} alt="News Image" />
          <div className="subtitles">
            <p><span className="author">User: </span>{data.user}<span className="date"> | Date: </span>{new Date(data.date).toLocaleDateString()}</p>
            <h3 className="subDescrip">DESCRIPTION:</h3>                             
            <div className="description">
              <p>{data.content}</p>
            </div>
            <div className="buttons">
              <button className="bEdit" onClick={() => navigate(`edit/${data.id_news}`)}>EDIT</button>
              <button className="bDelete" onClick={() => deleteData(id_news).then(()=> navigate("/dashboard"))}>DELETE</button>
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
