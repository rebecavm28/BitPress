import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import { getNewById, deleteData } from '../../services/newServices'; // Asumiendo que existe una función deleteData en tu servicio
import './Detail.css';
import { useNavigate } from 'react-router-dom'

const Detail = () => {
  const { id_news } = useParams();
  const [ data, setData ] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNewById(id_news); 
        setData(response); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id_news]);

  const handleDelete = async () => {
    try {
      await deleteData(id_news);
      window.location.reload();

      const response = await registerUser(data);
      const {token, rol} = response.sesiondata;
      localStorage.setItem('token', token);
      localStorage.setItem('rol', rol);
          console.log(handleDelete)
    } catch (error) {
          console.error(error)
    }
  };

  return (
    <div>
      {data ? (
        <div className="chargingBox">
          <h2 className="titleNew">{data.title}</h2>
          <img className="imgNew" src={data.imageUrl} alt="News Image" />
          <div className="subtitles">
            <p><span className="author">User: </span>{data.user}<span className="date"> | Date: </span>{data.date}</p>
            <h3 className="subDescrip">DESCRIPTION:</h3>
            <div className="description">
              <p>{data.content}</p>
            </div>
            <div className="buttons">
              <button className="bEdit">EDIT</button>
              <button className="bDelete" onClick={() => {handleDelete(`${data.new_id}`); navigate('/dashboard')}}>DELETE</button>
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
