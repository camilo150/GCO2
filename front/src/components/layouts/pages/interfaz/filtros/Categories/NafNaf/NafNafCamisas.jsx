import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import Foother from "../../../../interfaz/Foother";
import Head from "../../../../interfaz/Head";
import { Cabezon } from '../../../Cabezon';
import { FiltroDeRopas } from '../../FiltroDeRopas';
import Nafnaf_P from '../../../../../../../assets/img/Portadas/Nafnaf_P.png';

function NafNafCamisas() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [NafNafCamisasProducts] = useState([]);

  return (
    <>
     <section style={{
        backgroundImage: "linear-gradient(0deg, #b8b8b8 0%, #182848 50%)",
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
      <Head />
      <img src={Nafnaf_P} className='Imagenes_P' alt="" />
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
      <Foother />
      </section>
    </>
  );
}

export default NafNafCamisas;
