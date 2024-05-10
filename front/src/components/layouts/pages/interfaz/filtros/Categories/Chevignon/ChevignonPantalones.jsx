import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Foother from "../../../../interfaz/Foother";
import Head from "../../../../interfaz/Head";
import { Cabezon } from '../../../Cabezon';
import { data } from '../../../../../../database/data';
import { FiltroDeRopas } from '../../FiltroDeRopas';

function chevignonPantalones() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [chevignonPantalonesProducts] = useState([]);

  return (
    <>
      <header className="cabezaChevignon">
        <Link className="logoChevignon" to="/home">
          <h1>GCO</h1>
        </Link>
        <Cabezon
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      </header>
      <Head />
      <main id='main'style={{backgroundImage: 'linear-gradient(0deg, rgba(9, 8, 8, 0.83) 0%, #d0cfcf 77%)',}}>
        <section id="tituloChevignon">
          <h1 id="contenidoTituloChevignon">CHEVIGNON</h1>
        </section>
        <img src="src/assets/img/Portadas/chevignonPresentacion.png" style={{width:"100%",}} alt="chevignon portada" />
        <section className="Ropas">
          <FiltroDeRopas
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            data={chevignonPantalonesProducts}/> 
        </section>
      </main>
      <Foother />
    </>
  );
}

export default chevignonPantalones;
