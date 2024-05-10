import React from 'react'
import { Link } from 'react-router-dom'
import NabBarC from "../filtros/NabBars/NabBarC"
import Head from '../Head'
import Foother from '../Foother'

const FiltroMotherCare = () => {
    return (
        <>
         <header className="cabezaChevignon">
          <Link className="logoChevignon" to="/home">
            <h1>GCO</h1>
          </Link>
          </header>
            <Head />
            <main id='main'style={{backgroundImage: 'linear-gradient(0deg, rgba(9, 8, 8, 0.83) 0%, #d0cfcf 77%)',}}>
        <section id="tituloChevignon">
          <h1 id="contenidoTituloChevignon">CHEVIGNON</h1>
        </section>
        <img src="src/assets/img/Portadas/chevignonPresentacion.png" style={{width:"100%",}} alt="chevignon portada" />
       <NabBarC/>
        <Link to={"/Chevignon"}>
            <button type='button' className='botonVerMas' style={{margin: "0 auto",marginTop: "1rem", display: "block"}}>Ver Todo</button>
        </Link>
            </main>
            <Foother />
        </>
    )
}

export default FiltroMotherCare