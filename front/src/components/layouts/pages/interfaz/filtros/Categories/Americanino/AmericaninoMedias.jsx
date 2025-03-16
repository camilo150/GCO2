import React, { useState, useEffect } from 'react';
import Foother from "../../../../interfaz/Foother";
import Head from "../../../../interfaz/Head";
import { Cabezon } from '../../../Cabezon';
import { FiltroDeRopas } from '../../FiltroDeRopas';
import Americanino_P from "../../../../../../../assets/img/Portadas/Americanino_P.png"


function AmericaninoMedias() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [americaninoMediasProducts, ] = useState([]);

  return (
    <>
     <section style={{
        backgroundImage: 'linear-gradient(0deg, #5d6a7d 9%, rgba(28, 61, 126, 0.96) 49%)',
        backgroundPosition: 'center center', 
        backgroundRepeat: 'no-repeat',       
        backgroundSize: 'cover',             
        backgroundAttachment: 'fixed'        
      }}>
        <Cabezon
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      <main id='main' style={{backgroundImage: 'linear-gradient(0deg, #5d6a7d 9%, rgba(28, 61, 126, 0.96) 49%)',border:"soild 2px black"}}>
        <Head />
        <img src={Americanino_P} className='Imagenes_P' alt="" /> 
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
      <Foother /></section>
    </>
  );
}

export default AmericaninoMedias;
