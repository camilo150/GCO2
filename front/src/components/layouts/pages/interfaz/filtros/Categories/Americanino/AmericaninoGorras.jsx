import React, { useState, useEffect } from 'react';
import Foother from "../../../../interfaz/Foother";
import Head from "../../../../interfaz/Head";
import { Cabezon } from '../../../Cabezon';
import { FiltroDeRopas } from '../../FiltroDeRopas';
import Americanino_P from "../../../../../../../assets/img/Portadas/Americanino_P.png"

function AmericaninoGorras() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [americaninoGorrasProducts, ] = useState([]);

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
     <img src={Americanino_P} className='Imagenes_P' alt="" /> <Head />
       <FiltroDeRopas
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          data={americaninoGorrasProducts}
        />
      <Foother /></section>
    </>
  );
}
export default AmericaninoGorras;
