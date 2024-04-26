import React from 'react';
import { Link } from 'react-router-dom';
import Foother from '../interfaz/Foother';
import Head from './../interfaz/Head';
import Carrusel from '../interfaz/Carrusel';
function Inicio() {
  return (
    <>
      <header className="cabeza">
        <Link className="logo" to="/">
          <h1>GCO</h1>
        </Link>
      </header>  
      <main className="contenido">
        <Head></Head>
        <Carrusel></Carrusel>
     <Foother/>
      </main>
      
      
      
    </>
  );
}

export default Inicio;
