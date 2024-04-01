import React from 'react'
import './Home.css'
import Noticia_Destacada from '../../assets/images/destacada.png'
// import NewsGallery from '../../components/Gallery/NewsGallery'

const Home = () => {
  return (
    <main className='Home_container'>
      <h1>NOTICIA PRINCIPAL</h1>
      <img src={Noticia_Destacada} alt="Imagen de la noticia destacada" />
      {/* <NewsGallery /> */}
    </main>
  )
}

export default Home