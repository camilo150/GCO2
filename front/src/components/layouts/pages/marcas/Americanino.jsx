import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import { ProductList } from '../interfaz/ProductList';
import { Cabezon } from '../interfaz/Cabezon';
import { data } from '../../../database/data';
import ImagenesDePortada from '../interfaz/ImagenesDePortada';
import NabBarA from '../interfaz/filtros/NabBars/NabBarA';

function Americanino() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [americaninoProducts, setAmericaninoProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = data.filter(product => product.marca === 'Americanino');
    setAmericaninoProducts(filteredProducts);
  }, []);
  return (
    <>
      <section style={{
        backgroundImage: 'linear-gradient(0deg, #5d6a7d 9%, rgba(28, 61, 126, 0.96) 49%)',
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
        <ImagenesDePortada></ImagenesDePortada>
        <NabBarA></NabBarA>
        <ProductList
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          data={americaninoProducts} // Pasa los productos de Americanino como prop
        />
        <Foother />
      </section>
    </>
  );
}

export default Americanino;
