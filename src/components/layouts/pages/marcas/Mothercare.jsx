import React from 'react';
import { Link } from 'react-router-dom';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import ProductItem from "../../pages/interfaz/ProducItem"
import Carro from '../interfaz/Carro_de_compras/Carro';
function Mothercare() {
  const productos = [
    {
      nombre: 'coche azul',
      marca: "Mothercare",
      tipoPrenda: 'coche',
      precio: 100000,
      imageUrl:"/src/assets/img/prendas_mothercare/coche_azul.jpg"
    },
    {
      nombre: 'coche doble',
      marca: 'Mothercare',
      tipoPrenda: 'coche',
      precio: 546000,
      imageUrl: '/src/assets/img/prendas_mothercare/coche_doble.jpg',
      
    },
    {
      nombre: 'coche doble gris',
      marca: 'Mothercare',
      tipoPrenda: 'coche',
      precio: 504600,
      imageUrl: '/src/assets/img/prendas_mothercare/coche_doble_gris.jpg',
    },
    {
      nombre: 'coche gris',
      marca: 'Mothercare',
      tipoPrenda: 'coche',
      precio: 504600,
      imageUrl: '/src/assets/img/prendas_mothercare/coche_gris.jpg',
    },
    {
      nombre: 'coche gris oscuro',
      marca: 'Mothercare',
      tipoPrenda: 'coche',
      precio: 554000,
      imageUrl: '/src/assets/img/prendas_mothercare/coche_gris_oscuro.jpg',
    },
    {
      nombre: 'coche naranja',
      marca: 'Mothercare',
      tipoPrenda: 'coche',
      precio: 550050,
      imageUrl: '/src/assets/img/prendas_mothercare/coche_naranja.jpg',
    },
    {
      nombre: 'coche negro',
      marca: 'Mothercare',
      tipoPrenda: 'coche',
      precio: 556000,
      imageUrl: '/src/assets/img/prendas_mothercare/coche_negro.jpg',
    },
    {
      nombre: 'coche rojo',
      marca: 'Mothercare',
      tipoPrenda: 'coche',
      precio: 590000,
      imageUrl: '/src/assets/img/prendas_mothercare/coche_rojo.jpg',
    },
    {
      nombre: 'coche rosa',
      marca: 'Mothercare',
      tipoPrenda: 'coche',
      precio: 501010,
      imageUrl: '/src/assets/img/prendas_mothercare/coche_rosa.jpg',
    },
    {
      nombre: 'cuna blanca ',
      marca: 'Mothercare',
      tipoPrenda: 'cuna',
      precio: 510010,
      imageUrl: '/src/assets/img/prendas_mothercare/cuna_blanca.jpg',
    },
    {
      nombre: 'cuna blanca con mate',
      marca: 'Mothercare',
      tipoPrenda: 'cuna',
      precio: 520200,
      imageUrl: '/src/assets/img/prendas_mothercare/cuna_blanca_con_mate.jpg',
    },
    {
      nombre: 'cuna grande gris claro',
      marca: 'Mothercare',
      tipoPrenda: 'cuna',
      precio: 520300,
      imageUrl: '/src/assets/img/prendas_mothercare/cuna_grande_gris_claro.jpg',
    },
    {
      nombre: 'cuna grande gris mate',
      marca: 'Mothercare',
      tipoPrenda: 'cuna',
      precio: 510111,
      imageUrl: '/src/assets/img/prendas_mothercare/cuna_grande_gris_mate.jpg',
    },
    {
      nombre: 'cuna gris clara',
      marca: 'Mothercare',
      tipoPrenda: 'cuna',
      precio: 120011,
      imageUrl: '/src/assets/img/prendas_mothercare/cuna_gris_clara.jpg',
    },
    {
      nombre: 'cuna mate',
      marca: 'Mothercare',
      tipoPrenda: 'cuna',
      precio: 220000,
      imageUrl: '/src/assets/img/prendas_mothercare/cuna_mate.jpg',
    },
    {
      nombre: 'cuna mediana gris ',
      marca: 'Mothercare',
      tipoPrenda: 'cuna',
      precio: 199999,
      imageUrl: '/src/assets/img/prendas_mothercare/cuna_mediana_gris.jpg',
    },{
      nombre: 'cuna negra',
      marca: 'Mothercare',
      tipoPrenda: 'cuna',
      precio: 150010,
      imageUrl: '/src/assets/img/prendas_mothercare/cuna_negra.jpg',
    },
    {
      nombre: 'silla para bebe azul',
      marca: 'Mothercare',
      tipoPrenda: 'silla',
      precio: 111000,
      imageUrl: '/src/assets/img/prendas_mothercare/silla_para_bebe_azul.jpg',
    },
    {
      nombre: 'silla para bebe roja ',
      marca: 'Mothercare',
      tipoPrenda: 'silla',
      precio: 110000,
      imageUrl: '/src/assets/img/prendas_mothercare/silla_para_bebe_roja.jpg',
    },
    {
      nombre: 'silla para bebe gris',
      marca: 'Mothercare',
      tipoPrenda: 'silla',
      precio: 250000,
      imageUrl: '/src/assets/img/prendas_mothercare/silla_para_bebe_gris.jpg'
    },]
  return (
    <>
      <header className="cabezaMothercare">
        <Link className="logoMothercare" to="/">
          <h1>GCO</h1>
        </Link>
        <Carro></Carro>
      </header>
      <Head />
      <main id='main' style={{backgroundImage:"linear-gradient(90deg, #c2e9fb 1%, #a1c4fd 100%)"}}>
        <section>
        <img src="/src/assets/img/Portadas/mama_bebe_motherCare.jpg" style={{ width: '100%', borderBottom: 'solid 2px black', marginTop: '9.5%' }} alt="" />
          <section className="Ropas">
            {productos.map((producto, index) => (
              <ProductItem key={index}
               imageUrl={producto.imageUrl}
               nombre={producto.nombre}
               precio={producto.precio}
              />
            ))}
          </section>
        </section>
      </main>
      <Foother />
    </>
  );
}

export default Mothercare;