import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Foother from "../../../../interfaz/Foother";
import Head from "../../../../interfaz/Head";
import { Cabezon } from '../../../Cabezon';
import { data } from '../../../../../../database/data';
import { FiltroDeRopas } from '../../FiltroDeRopas';

function AmericaninoMedias() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [americaninoMediasProducts, ] = useState([]);



  return (
    <>
      <header className="cabezaAmericanino">
        <Link className="logoAmericanino" to="/home">
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
      <main id='main' style={{backgroundImage: 'linear-gradient(0deg, #5d6a7d 9%, rgba(28, 61, 126, 0.96) 49%)',border:"soild 2px black"}}>
        <Head />
        <img style={{ width: "100%", marginTop: "9.5%" ,borderBottom:"solid 4px black",borderTop:"solid 5px"}} src="src/assets/img/Portadas/americaninoPortada.png" alt="" />
        <FiltroDeRopas
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          data={americaninoMediasProducts}
        />
      </main>
      <Foother />
    </>
  );
}

export default AmericaninoMedias;
