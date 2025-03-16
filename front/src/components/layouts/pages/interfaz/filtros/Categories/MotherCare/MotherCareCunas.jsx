import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Foother from "../../../../interfaz/Foother";
import Head from "../../../../interfaz/Head";
import { Cabezon } from '../../../Cabezon';
import { FiltroDeRopas } from '../../FiltroDeRopas';
import Mothercare_P from '../../../../../../../assets/img/Portadas/MotherCare_P.jpg';

function MothercareCunas() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [ MothercareCunasProducts] = useState([]);
  return (
    <>
      <section style={{
        backgroundImage: "linear-gradient(90deg, #c2e9fb 1%, #a1c4fd 100%)",
        backgroundPosition: 'center center',  // Corregido
        backgroundRepeat: 'no-repeat',        // Corregido
        backgroundSize: 'cover',              // Corregido
        backgroundAttachment: 'fixed'         // Corregido
      }}>
        <Cabezon
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
        <img src={Mothercare_P} className='Imagenes_P' alt="" />
        <Head />
        <FiltroDeRopas
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          data={MothercareCunasProducts} // Pasa los productos de Mothercare como prop
        />
        <Foother />
      </section>
    </>
  );
}

export default MothercareCunas;
