import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import Foother from "../../../../interfaz/Foother";
import Head from "../../../../interfaz/Head";
import { Cabezon } from '../../../Cabezon';
import { FiltroDeRopas } from '../../FiltroDeRopas';

function NafNafPantalones() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [NafNafPantalonesProducts] = useState([]);

  return (
    <>
      <header className="cabezaNafnaf">
        <Link className="logoNafnaf" to="/home">
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
      <main id='Secciones' style={{ backgroundImage: "linear-gradient(0deg, #b8b8b8 0%, #182848 50%)"}}>
        <img style={{ width: "100%", marginTop: "10%" }} src="src/assets/img/Portadas/naf_naf_inicio.png" alt="" />
        <section className="Ropas">
          <FiltroDeRopas
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            data={NafNafPantalonesProducts} // Pasa los productos de Nafnaf como prop
          /> 
        </section>
      </main>
      <Foother />
    </>
  );
}

export default NafNafPantalones;
