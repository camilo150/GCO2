import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Foother from "../../../../interfaz/Foother";
import Head from "../../../../interfaz/Head";
import { Cabezon } from '../../../Cabezon';
import { FiltroDeRopas } from '../../FiltroDeRopas';

function MothercareCunas() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [ MothercareCunasProducts] = useState([]);
  return (
    <>
        <Cabezon
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      <Head />
      <main id='main' style={{backgroundImage:"linear-gradient(90deg, #c2e9fb 1%, #a1c4fd 100%)"}}>
           <FiltroDeRopas
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            data={MothercareCunasProducts} // Pasa los productos de Mothercare como prop
          /> 
      </main>
      <Foother />
    </>
  );
}

export default MothercareCunas;
