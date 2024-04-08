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
        <h2 className="titleNew">TITLE NEW</h2>
        <img className="imgNew"></img>
      <div className="subtitles">
        <p><span className="author">Author:</span> <span className="date">| Date:</span></p>
        <h3 classNAme="subDescrip">DESCRIPTION:</h3>
        <div className="description">
        <p>Lorem ipsum dolor sit amet consectetur. Fringilla sit viverra metus sit sem. Diam pharetra tortor egestas urna faucibus tincidunt faucibus. Aliquet volutpat bibendum consectetur amet et porttitor mattis ipsum. Scelerisque vestibulum nec facilisis varius fermentum...Lorem ipsum dolor sit amet consectetur. Fringilla sit viverra metus sit sem. Diam pharetra tortor egestas urna faucibus tincidunt faucibus. Aliquet volutpat bibendum consectetur amet et porttitor mattis ipsum. Scelerisque vestibulum nec facilisis varius fermentum.</p></div>
      </div>
        <div className='buttons'>
        <button className="bEdit">EDIT</button>
        <button className="bDelete">DELETE</button>
        {/* <button onClick={handleClick}>Edit</button>
        <button onClick={handleClick}>Delete</button> */}
        </div>
      </div>
    )}
  </div>
);
};


export default Detail;

