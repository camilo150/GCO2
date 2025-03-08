import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import Foother from "../../../../interfaz/Foother";
import Head from "../../../../interfaz/Head";
import { Cabezon } from '../../../Cabezon';
import { FiltroDeRopas } from '../../FiltroDeRopas';

function NafNafCamisas() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [NafNafCamisasProducts] = useState([]);

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
      <main id='Secciones' style={{ backgroundImage: "linear-gradient(0deg, #b8b8b8 0%, #182848 50%)"}}>
        <section className="Ropas">
          <FiltroDeRopas
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            data={NafNafCamisasProducts} // Pasa los productos de Nafnaf como prop
          /> 
        </section>
      </main>
      <Foother />
    </>
  );
}

export default NafNafCamisas;
