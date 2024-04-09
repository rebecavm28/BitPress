import './New.css'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

const New = ({news}) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const navigate = useNavigate();

    return(
        <>
            {
                news.map(newData => {
                    return(<div key={newData.id} className='news_container'>
                            <article className='New_box'>
                                <div className="text">
                                    <h2 className='New_tittle'>{newData.tittle}</h2>
                                    <p className="date">{newData.date}</p>
                                </div>
                                <img src={newData.imageUrl} alt="Imagen de la noticia" className='New_img'/>
                            </article>
                        </div>
                    )
                })
            }
        </>
)}

export default New