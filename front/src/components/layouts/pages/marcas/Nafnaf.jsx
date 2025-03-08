import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import { Cabezon } from '../interfaz/Cabezon';
import { data } from '../../../database/data';
import { ProductList } from '../interfaz/ProductList';
import ImagenesDePortada from '../interfaz/ImagenesDePortada';

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
      <main style={{ backgroundImage: "linear-gradient(0deg, #b8b8b8 0%, #182848 50%)"}}>
        <ImagenesDePortada></ImagenesDePortada>
         <section>
          <ProductList
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            data={nafnafProducts} 
          /> 
        </section>
      </main>
      <Foother />
    </>
  );
}

export default Nafnaf;
