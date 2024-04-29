import React from 'react';
import { Link } from 'react-router-dom';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import ProductItem from "../../pages/interfaz/ProducItem"
import Carro from '../interfaz/Carro_de_compras/Carro';
function Mothercare() {
  const productos = [
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_azul.jpg" },
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_doble_gris.jpg" },
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_doble.jpg" },
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_gris_oscuro.jpg" },
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_gris.jpg"},                                         
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_naranja.jpg" },
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_negro.jpg" },
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_rojo.jpg" },
    { imageUrl: "/src/assets/img/prendas_mothercare/coche_rosa.jpg" },
    { imageUrl: "/src/assets/img/prendas_mothercare/cuna_blanca_con_mate.jpg" },
    { imageUrl: "/src/assets/img/prendas_mothercare/cuna_blanca.jpg" },
    { imageUrl: "/src/assets/img/prendas_mothercare/cuna_grande_gris_claro.jpg" },
    { imageUrl: "/src/assets/img/prendas_mothercare/cuna_grande_gris_mate.jpg" },
    { imageUrl: "/src/assets/img/prendas_mothercare/cuna_gris_clara.jpg" },
    { imageUrl: "/src/assets/img/prendas_mothercare/cuna_mate.jpg" },
    { imageUrl: "/src/assets/img/prendas_mothercare/cuna_mediana_gris.jpg" },
    { imageUrl: "/src/assets/img/prendas_mothercare/cuna_negra.jpg"  },
    { imageUrl: "/src/assets/img/prendas_mothercare/silla_para_bebe_azul.jpg" }, 
    { imageUrl: "/src/assets/img/prendas_mothercare/silla_para_bebe_roja.jpg" },
    { imageUrl: "/src/assets/img/prendas_mothercare/silla-para_bebe_gris.jpg"  },
  ];

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
              <ProductItem key={index} imageUrl={producto.imageUrl}  />
            ))}
          </section>
        </section>
      </main>
      <Foother />
    </>
  );
}

export default Mothercare;