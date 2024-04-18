import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from 'react';
import { getNewById, deleteData } from '../../services/newServices'; // Asumiendo que existe una función deleteData en tu servicio
import './Detail.css';
import { useUserContext } from "../../context/UserContext";

const Detail = () => {
  const { id_news } = useParams();
  const [ data, setData ] = useState(null);
  const navigate = useNavigate();
  const{rol} = useUserContext();
  console.log(rol)
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
    <div className="boxPincipalDetail">
      {data ? (
        <div className="chargingBox">
          <h2 className="titleNew">{data.tittle}</h2>
          <img className="imgNew" src={data.imageUrl} alt="News Image" />
          <div className="subtitlesDetail">
            <p><span className="author">User </span>{data.user}<span className="date"> | Fecha: </span>{new Date(data.date).toLocaleDateString()}</p>
            <h3 className="subDescrip">Descripción:</h3>                             
            <div className="description">
              <p className="textDetail">{data.content}</p>
            </div>
            <div className="buttons">
            {rol == 'admin' &&(
              <>
              <button className="bEdit" onClick={() => navigate(`edit/${data.id_news}`)}>EDITAR</button>
              <button className="bDelete" onClick={() => deleteData(id_news).then(()=> navigate("/dashboard"))}>ELIMINAR</button>
              </>
            )}
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
