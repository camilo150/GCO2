import React, { useState, useEffect } from 'react';
import Foother from "../../../../interfaz/Foother";
import Head from "../../../../interfaz/Head";
import { Cabezon } from '../../../Cabezon';
import { FiltroDeRopas } from '../../FiltroDeRopas';

function AmericaninoCamisa() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [americaninoCamisaProducts, ] = useState([]);
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
      <main id='main' style={{backgroundImage: 'linear-gradient(0deg, #5d6a7d 9%, rgba(28, 61, 126, 0.96) 49%)',border:"soild 2px black"}}>
         <Head />
         
         <FiltroDeRopas
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            data={americaninoCamisaProducts}
          />
        </main>
      <Foother />
    </>
  );
}

export default AmericaninoCamisa;
