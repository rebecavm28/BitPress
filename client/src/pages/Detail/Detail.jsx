import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import { getNewById } from '../../services/newServices'
import './Detail.css';

const Detail = () => {
  const { id } = useParams();
    const [ data, setData ] = useState(null);

      
      useEffect(() => {
        const fetchData = async () =>{
            const response = await getNewById(id); 
             setData(response); 
        }
        fetchData()
    }, [id]);


return (
  <div>
    {data ? (
     <article className='details_box' key={data.id}>
     <h1 className='n'>Titulo{data.name}</h1><br />
     <div className='mrc'><img src={data.image} alt='img-new' className='image'/></div><br />
     <h3 className='s_n'>Descripción: <span className='s_name-c'>{data.scientificName}</span></h3>
     <div className='aut'><span className='strong'>Autora: </span>{data.photographer}
       </div>
     <p className='descrip'>{data.description}</p>
   </article>
    ) : (
      <div className="chargingBox">
        <p>Loading data...</p>
      </div>
    )}
  </div>
);
};


export default Detail;

