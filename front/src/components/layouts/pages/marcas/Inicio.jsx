import React from 'react';
import Foother from '../interfaz/Foother';
import Head from './../interfaz/Head';
import Carrusel from '../interfaz/Carrusel';
import NabBar from "../interfaz/NabBar"
import GCOIcon from '../interfaz/filtros/GCOIcon';
import { Link } from 'react-router-dom';
function Inicio() {
  return (
    <>
      <section style={{
        backgroundImage: "linear-gradient(0deg, #b8b8b8 0%, #182848 50%)",
        backgroundPosition: 'center center',  // Corregido
        backgroundRepeat: 'no-repeat',        // Corregido
        backgroundSize: 'cover',              // Corregido
        backgroundAttachment: 'fixed'         // Corregido
      }}>
      <GCOIcon></GCOIcon>
        <Head></Head>
        <Carrusel></Carrusel>
        <h1 id='disfrutaPrendas'>¡Te recomendamos estas prendas!</h1>
        <NabBar></NabBar>
        <Foother />
      </section>
    </>
  );
}

export default Inicio;
