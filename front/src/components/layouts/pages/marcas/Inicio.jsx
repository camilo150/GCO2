import React from 'react';
import { Link } from 'react-router-dom';
import Foother from '../interfaz/Foother';
import Head from './../interfaz/Head';
import Carrusel from '../interfaz/Carrusel';
import NabBar from "../interfaz/NabBar"
function Inicio() {
  return (
    <>
      <header className="cabeza">
        <Link className="logo" to="/home">
          <h1>GCO</h1>
        </Link>
        <Link to={"/"}>
                    <button type='button' className='linkIicioImagen' style={{margin: "0 auto",marginTop: "1rem", display: "block", backgroundColor: "#101010"}}>Cerrar Sesión</button>
                </Link>
      </header>   

      <main>
        <Head></Head>
        <Carrusel></Carrusel>
        <h1 id='disfrutaPrendas'>¡Te recomendamos estas prendas!</h1>
        <NabBar>
  
        </NabBar>
     <Foother/>
      </main>
    </>
  );
}

export default Inicio;
