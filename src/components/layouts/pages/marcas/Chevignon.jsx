import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import { data } from '../../../database/data'; // Importa los datos de productos
import { Cabezon } from '../interfaz/Cabezon';
import { ProductList } from '../interfaz/ProductList';

function Chevignon() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [chevignonProducts, setChevignonProducts] = useState([]);

  useEffect(() => {
    // Filtrar los productos de Chevignon
    const filteredProducts = data.filter(product => product.marca === 'Chevignon');
    setChevignonProducts(filteredProducts);
  }, []); // La dependencia vacía asegura que este efecto solo se ejecute una vez

  return (
    <>
      <header className="cabezaChevignon">
        <Link className="logoChevignon" to="/">
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
      <main id='main'style={{backgroundImage: 'linear-gradient(0deg, rgba(9, 8, 8, 0.83) 0%, #d0cfcf 77%)',}}>
        <section id="tituloChevignon">
          <h1 id="contenidoTituloChevignon">CHEVIGNON</h1>
        </section>
        <img src="src/assets/img/Portadas/chevignonPresentacion.png" style={{width:"100%",}} alt="chevignon portada" />
        <section className="Ropas">
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
