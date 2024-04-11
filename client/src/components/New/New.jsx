import './New.css'
import { useNavigate } from 'react-router-dom'

const New = ({news}) => {
    const navigate = useNavigate();

    return(
        <>
            {
                news.map(newData => {
                    return(<div key={newData.id} className='news_container' onClick={() => navigate(`/detail/${newData.id}`)}>
                            <article className='New_box'>
                                <div className="text">
                                    <h2 className='New_tittle'>{newData.tittle}</h2>
                                    <p className="date">{newData.date}</p>
                                </div>
                                <img src={newData.imageUrl} alt="Imagen de la noticia" className='New_img' onClick={navigate('/detail')}/>
                            </article>
                        </div>
                    )
                })
            }
        </>
)}

export default New