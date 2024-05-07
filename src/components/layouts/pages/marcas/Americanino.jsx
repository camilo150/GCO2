import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import { ProductList } from '../interfaz/ProductList';
import { Cabezon } from '../interfaz/Cabezon';
import { data } from '../../../database/data';

function Americanino() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [americaninoProducts, setAmericaninoProducts] = useState([]);

  useEffect(() => {
    // Filtrar los productos de Americanino
    const filteredProducts = data.filter(product => product.marca === 'Americanino');
    setAmericaninoProducts(filteredProducts);
  }, []); // La dependencia vacía asegura que este efecto solo se ejecute una vez

  return (
    <>
      <header className="cabezaAmericanino">
        <Link className="logoAmericanino" to="/">
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
      <main id='main' style={{backgroundImage: 'linear-gradient(0deg, #5d6a7d 9%, rgba(28, 61, 126, 0.96) 49%)',border:"soild 2px black"}}>
        <Head />
        <img style={{ width: "100%", marginTop: "9.5%" ,borderBottom:"solid 4px black",borderTop:"solid 5px"}} src="src/assets/img/Portadas/americaninoPortada.png" alt="" />
        <ProductList
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          data={americaninoProducts} // Pasa los productos de Americanino como prop
        />
      </main>
      <Foother />
    </>
  );
}

export default Americanino;
