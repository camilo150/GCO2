import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Foother from "../../../../interfaz/Foother";
import Head from "../../../../interfaz/Head";
import { Cabezon } from '../../../Cabezon';
import { FiltroDeRopas } from '../../FiltroDeRopas';

function MothercareSillas() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [ MothercareSillasProducts] = useState([]);
  return (
    <>
      <header className="cabezaMothercare">
        <Link className="logoMothercare" to="/home">
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
      <main id='main' style={{backgroundImage:"linear-gradient(90deg, #c2e9fb 1%, #a1c4fd 100%)"}}>
          <img src="/src/assets/img/Portadas/mama_bebe_motherCare.jpg" style={{ width: '100%', borderBottom: 'solid 2px black', marginTop: '9.5%' }} alt="" />
          <FiltroDeRopas
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            data={MothercareSillasProducts} // Pasa los productos de Mothercare como prop
          /> 
      </main>
      <Foother />
    </>
  );
}

export default MothercareSillas;
