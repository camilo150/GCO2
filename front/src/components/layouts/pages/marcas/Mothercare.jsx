import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Foother from "../interfaz/Foother";
import { data } from '../../../database/data'; // Importa los datos de productos
import { Cabezon } from '../interfaz/Cabezon';
import { ProductList } from '../interfaz/ProductList';
import Head from '../interfaz/Head';
import ImagenesDePortada from '../interfaz/ImagenesDePortada';

function Mothercare() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [mothercareProducts, setMothercareProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = data.filter(product => product.marca === 'Mothercare');
    setMothercareProducts(filteredProducts);
  }, []); 
  return (
    <>
      <header>
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
          <ImagenesDePortada></ImagenesDePortada>
           <ProductList
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            data={mothercareProducts} /> 
      </main>
      <Foother />
    </>
  );
}

export default Mothercare;
