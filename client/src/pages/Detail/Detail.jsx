// import { useParams } from "react-router";
// import { useEffect, useState } from 'react';
// import { getOneNew } from '../services/newServices';
// import '../Detail/Detail.css';

// const Detail = () => {
//   const { id } = useParams();
//     const [ data, setData ] = useState(null);

      
//       useEffect(() => {
//         const fetchData = async () =>{
//             const response = await getOneNew(id); 
//              setData(response); 
//         }
//         fetchData()
//     }, [id]);


// return (
//   <div>
//     {data ? (
//      <article className='animal' key={data.id}>
//      <h1 className='n'>Titulo: {data.name}</h1><br />
//      <div className='mrc'><img src={data.image} alt='img-animal' className='image'/></div><br />
//      <h3 className='s_n'>Nombre Científico: <span className='s_name-c'>{data.scientificName}</span></h3>
//      <div className='aut'><span className='strong'>Autora: </span>{data.photographer}
//        <img src={voz} alt="altavoz" className='a-voz' onClick={() => sound(data.sound)} />
//        </div>
//      <p className='descrip'>{data.description}</p>
//    </article>
//     ) : (
//       <p>Loading data...</p>
//     )}
//   </div>
// );
// };


// export default Detail;

