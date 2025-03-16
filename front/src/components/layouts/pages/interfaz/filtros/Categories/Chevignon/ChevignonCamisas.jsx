import React, { useState, useEffect } from 'react';
import Foother from "../../../../interfaz/Foother";
import Head from "../../../../interfaz/Head";
import { Cabezon } from '../../../Cabezon';
import { FiltroDeRopas } from '../../FiltroDeRopas';
import Chevignon_P from "../../../../../../../assets/img/Portadas/Chevignon_P.png"



function ChevignonCamisas() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [ChevignonCamisasProducts, ] = useState([]);
  return (
    <>
      <section style={{
        backgroundImage: 'linear-gradient(0deg, rgba(9, 8, 8, 0.83) 0%, #d0cfcf 77%)',
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
      <Head />
      <img src={Chevignon_P} className='Imagenes_P' alt="" />
       <section className="Ropas">
          <FiltroDeRopas
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            data={ChevignonCamisasProducts} // Pasa los productos de Chevignon como prop
          /> 
        </section>
      <Foother />
      </section>
    </>
  );
}

export default ChevignonCamisas;
