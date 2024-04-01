import React from 'react'
import './Home.css'
import Noticia_Destacada from '../../assets/images/destacada.png'
import New from '../../components/New/New'

const Home = () => {
  return (
    <main className='Home_container'>
      <h1>NOTICIA PRINCIPAL</h1>
      <img src={Noticia_Destacada} alt="Imagen de la noticia destacada" />
      <New />
    </main>
  )
}

export default Home