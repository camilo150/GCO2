import React from 'react';
import { Link } from 'react-router-dom';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import ProductItem from "../../pages/interfaz/ProducItem"

function Americanino() {
  const productos = [
    { imageUrl: "/src/assets/img/prendas_americanino/blusa_verde_Lima_mujer_americanino.jpg" },
    { imageUrl: "/src/assets/img/prendas_americanino/camisa_roja_mujer_americanino.jpg" },
    { imageUrl: "/src/assets/img/prendas_americanino/camisa_negra_americanino.jpg" },
    { imageUrl: "/src/assets/img/prendas_americanino/camisa_verde_lima_mujer_americanino.jpg" },
    { imageUrl: "/src/assets/img/prendas_americanino/camiseta_verde-militar_americanino.webp"},                                         
    { imageUrl: "/src/assets/img/prendas_americanino/camiseta_blanca_americanino.webp" },
    { imageUrl: "/src/assets/img/prendas_americanino/camiseta_blanca_mujer_americanino.jpg" },
    { imageUrl: "/src/assets/img/prendas_americanino/camiseta_gris_americanino.webp"},
    { imageUrl: "/src/assets/img/prendas_americanino/camiseta_naranja_americanino.webp"},
    { imageUrl: "/src/assets/img/prendas_americanino/camiseta_negra_americanino.webp"},
    { imageUrl: "/src/assets/img/prendas_americanino/gorra_blanca_americanino.jpg"},
    { imageUrl: "/src/assets/img/prendas_americanino/gorra_camionero_azul_americanino.jpg"},
    { imageUrl: "/src/assets/img/prendas_americanino/gorra_deportiva_negra_americanino.jpg"},
    { imageUrl: "/src/assets/img/prendas_americanino/gorra_negra_americanino.jpg"},
    { imageUrl: "/src/assets/img/prendas_americanino/gorra_rosa_americanio.jpg"},
    { imageUrl: "/src/assets/img/prendas_americanino/medias_azules_americanino.jpg"},
    { imageUrl: "/src/assets/img/prendas_americanino/medias_rosa_americanino.jpg"},
    { imageUrl: "/src/assets/img/prendas_americanino/medias_vainilla_americanino.jpg"}, 
    { imageUrl: "/src/assets/img/prendas_americanino/medias_vinotinto_americanino.jpg"},
    { imageUrl: "/src/assets/img/prendas_americanino/tobillera_vinotinto_americanino.jpg"},
  ];
  return (
    <>
      <header className="cabezaAmericanino">
        <Link className="logoAmericanino" to="/">
          <h1>GCO</h1>
        </Link>
      </header>
      <Head />
      <main id='main' style={{backgroundImage: 'linear-gradient(0deg, #5d6a7d 9%, rgba(28, 61, 126, 0.96) 49%)',border:"soild 2px black"}}>
        <section >
        <img style={{ width: "100%", marginTop: "9.5%" ,borderBottom:"solid 4px black",borderTop:"solid 5px"}} src="src/assets/img/Portadas/americaninoPortada.png" alt="" />
          <section className="Ropas">
            {productos.map((producto, index) => (
              <ProductItem key={index} imageUrl={producto.imageUrl} />
            ))}
          </section>
        </section>
      </main>
      <Foother />
    </>
  );
}
export default Americanino;