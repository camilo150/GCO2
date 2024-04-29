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

      <main  style={{backgroundColor: "#f9e4f8" }} >
        <Head></Head>
        <Carrusel></Carrusel>
        <h1 id='disfrutaPrendas'>¡DISFRUTA DE LA CALIDAD DE NUESTRAS PRENDAS CON GCO!</h1>
        <section className='Ropas'>
          <div className="contenido">
            <div className="contenedor"></div>
            <img className="imagenRopa" src="src/assets/img/prendas_nafnaf/camiseta_negra_mujer_nafnaf.png" alt=""   />
            <Link to={"/Nafnaf"}>
            <input className='botonVermas'  type="button" value="¡VER MÁS!"/>
           </Link>
          </div>

          <div className="contenido">
            <div className="contenedor"></div>
            <img className="imagenRopa" src="/src/assets/img/prendas_americanino/camisa_negra_americanino.jpg" alt="" />
            <Link to={"/Americanino"}>
            <input className='botonVermas'  type="button" value="¡VER MÁS!" />
          </Link>
          </div>

          <div className="contenido">
            <div className="contenedor"></div>
            <img className="imagenRopa" src="src/assets/img/prendas_Chevignon/buzo_Azul_chevignon.jpg" alt="" />
            <Link to={"/Chevignon"}>
            <input  className='botonVermas' type="button" value="¡VER MÁS!" />
          </Link>
          </div>

          <div className="contenido">
            <div className="contenedor"></div>
            <img className="imagenRopa" src="/src/assets/img/prendas_mothercare/coche_naranja.jpg" alt="" />
            <Link to={"/Mothercare"}>
            <input className='botonVermas' type="button" value="¡VER MÁS!" />
          </Link>
          </div>
          
  </section>
     <Foother/>
      </main>
    </>
  );
}

export default Inicio;
