import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import { Cabezon } from '../interfaz/Cabezon';
import { data } from '../../../database/data';
import { ProductList } from '../interfaz/ProductList';
import ImagenesDePortada from '../interfaz/ImagenesDePortada';
import NabBarN from '../interfaz/filtros/NabBars/NabBarN';

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
        <ImagenesDePortada></ImagenesDePortada>
        <NabBarN></NabBarN>
          <ProductList
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            data={nafnafProducts}
          />
        <Foother />
      </section>
    </>
  );
}

export default Nafnaf;
