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
                    return(
                        <div key={newData.id} className='news_container'>
                            <article className='New_box'>
                                <div className="text">
                                    <h2 className='New_tittle'>{newData.title}</h2>
                                    <p className="date">{newData.date}</p>
                                </div>
                                <img src='https://imagenes.elpais.com/resizer/jJ3ROgHziR1xFLhRyLOHdOHNx7U=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/MOIV3QIGOUC5YWUF5FEJ34N57Q.jpg' alt="Imagen de la noticia" className='New_img'/>
                            </article>
                        </div>
                    )
                })
            }
        </>
)}

export default New