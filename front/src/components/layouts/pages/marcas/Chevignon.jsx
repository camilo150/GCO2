import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import { data } from '../../../database/data'; // Importa los datos de productos
import { Cabezon } from '../interfaz/Cabezon';
import { ProductList } from '../interfaz/ProductList';
import ImagenesDePortada from '../interfaz/ImagenesDePortada';

function Chevignon() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [chevignonProducts, setChevignonProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = data.filter(product => product.marca === 'Chevignon');
    setChevignonProducts(filteredProducts);
  }, []);
  return (
    <>
      <header className="cabezaChevignon">
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
      <main id='main'style={{backgroundImage: 'linear-gradient(0deg, rgba(9, 8, 8, 0.83) 0%, #d0cfcf 77%)',}}>
        <ImagenesDePortada/>
        <section>
          <ProductList
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            data={chevignonProducts} // Pasa los productos de Chevignon como prop
          /> 
        </section>
      </main>
      <Foother />
    </>
  );
}

export default Chevignon;
