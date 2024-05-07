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
        <Link className="logo" to="/">
          <h1>GCO</h1>
        </Link>
      </header>   

      <main  style={{backgroundColor: "#f9e4f8" }} >
        <Head></Head>
        <Carrusel></Carrusel>
        <h1 id='disfrutaPrendas'>¡DISFRUTA DE LA CALIDAD DE NUESTRAS PRENDAS CON GCO!</h1>
        <NabBar>
  
        </NabBar>
     <Foother/>
      </main>
    </>
  );
}

export default Inicio;
