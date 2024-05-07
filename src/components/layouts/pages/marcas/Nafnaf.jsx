import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import { Cabezon } from '../interfaz/Cabezon';
import { data } from '../../../database/data';
import { ProductList } from '../interfaz/ProductList';

function Nafnaf() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [nafnafProducts, setNafnafProducts] = useState([]);

  useEffect(() => {
    // Filtrar los productos de Nafnaf
    const filteredProducts = data.filter(product => product.marca === 'NafNaf');
    setNafnafProducts(filteredProducts);
  }, []); // La dependencia vacía asegura que este efecto solo se ejecute una vez

  return (
    <>
      <header className="cabezaNafnaf">
        <Link className="logoNafnaf" to="/">
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
          <ProductList
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            data={nafnafProducts} // Pasa los productos de Nafnaf como prop
          /> 
        </section>
      </main>
      <Foother />
    </>
  );
}

export default Nafnaf;
