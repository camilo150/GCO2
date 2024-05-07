import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Foother from "../interfaz/Foother";
import { data } from '../../../database/data'; // Importa los datos de productos
import { Cabezon } from '../interfaz/Cabezon';
import { ProductList } from '../interfaz/ProductList';
import Head from '../interfaz/Head';

function Mothercare() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [mothercareProducts, setMothercareProducts] = useState([]);

  useEffect(() => {
    // Filtrar los productos de Mothercare
    const filteredProducts = data.filter(product => product.marca === 'Mothercare');
    setMothercareProducts(filteredProducts);
  }, []); // La dependencia vacía asegura que este efecto solo se ejecute una vez

  return (
    <>
      <header className="cabezaMothercare">
        <Link className="logoMothercare" to="/">
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
          <ProductList
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            data={mothercareProducts} // Pasa los productos de Mothercare como prop
          /> 
      </main>
      <Foother />
    </>
  );
}

export default Mothercare;
