import React from 'react';
import { Link } from 'react-router-dom';
import Carro from '../interfaz/Carro_de_compras/Carro';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import ProductItem from "../interfaz/ProducItem"
function Nafnaf() {
  const productos = [
  {
    nombre: 'Abrigo Azul Claro',
    marca: "NafNaf",
    tipoPrenda: 'Abrigo',
    precio:50000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/abrigo_azul_claro_mujer_nafna.png",
  },
  {
    nombre: 'Abrido Gris Mate',
    marca: "NafNaf",
    tipoPrenda: 'Abrigo',
    precio:250000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/abrigo_gris_mate_mujer_nafnaf.png",
  },
  {
    nombre: 'Abrigo Gris',
    marca: "NafNaf",
    tipoPrenda: 'Abrigo',
    precio:250000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/abrigo_gris_mujer_nafnaf.png",
  },
  {
    nombre: 'Abrigo Verde',
    marca: "NafNaf",
    tipoPrenda: 'Abrigo',
    precio:250000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/abrigo_verde_mujer_nafnaf.png",
  },
  {
    nombre: 'Camisa Azul',
    marca: "NafNaf",
    tipoPrenda: 'camisa',
    precio:250000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/camisa_azul_mujer_nafnaf.png",
  },
  {
    nombre: 'Camisa Blanca',
    marca: "NafNaf",
    tipoPrenda: 'camisa',
    precio:310000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/camisas_blanca_mujer_nafnaf.png",
  },
  {
    nombre: 'Camisa Negra ',
    marca: "NafNaf",
    tipoPrenda: 'camiseta',
    precio:315000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/camiseta_negra_mujer_nafnaf.png",
  },
  {
    nombre: 'Enterizo Cafe',
    marca: "NafNaf",
    tipoPrenda: 'enterizo',
    precio:210000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/enterizo_cafe_mujer_nafnaf.png",
  },
  {
    nombre: 'Enterizo Gris',
    marca: "NafNaf",
    tipoPrenda: 'enterizo',
    precio:220000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/enterizo_gris_mujer_nafnaf.png",
  },
  {
    nombre: 'Enterizo Negro',
    marca: "NafNaf",
    tipoPrenda: 'enterizo',
    precio:320000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/enterizo_negro_mujer_nafnaf.png",
  },
  {
    nombre: 'Enterizo Rojo',
    marca: "NafNaf",
    tipoPrenda: 'enterizo',
    precio:215000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/enterizo_rojo_mujer_nafnaf.png",
  },
  {
    nombre: 'Pantalon Acampanado Azul',
    marca: "NafNaf",
    tipoPrenda: 'pantalon',
    precio:270000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/pantalon_acampanado_azul_mujer_nafnaf.png",
  },
  {
    nombre: 'Pantalon Acampanado Vinotinto',
    marca: "NafNaf",
    tipoPrenda: 'pantalon',
    precio:270000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/pantalon_acampanado_vinotinto_mujer_nafnaf.png",
  },
  {
    nombre: 'Pantalon Cargo',
    marca: "NafNaf",
    tipoPrenda: 'pantalon',
    precio:270000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/pantalon_cargo_mujer_nafnaf.png",
  },
  {
    nombre: 'Pantalon Negro',
    marca: "NafNaf",
    tipoPrenda: 'pantalon',
    precio:270000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/pantalon_negro_mujer_nafnaf.png",
  },
  {
    nombre: 'Short Verde',
    marca: "NafNaf",
    tipoPrenda: 'pantalon',
    precio:200000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/short_verde_mujer_nafnaf.png",
  },
  {
    nombre: 'Zapatos Beige',
    marca: "NafNaf",
    tipoPrenda: 'zapatos',
    precio:200000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/zapato_beige_nafnaf.png",
  },
  {
    nombre: 'Zapatos Blanco',
    marca: "NafNaf",
    tipoPrenda: 'zapatos',
    precio:200000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/zapatos_blanco_nafnaf.png",
  },
  {
    nombre: 'Zapatos Cafe',
    marca: "NafNaf",
    tipoPrenda: 'zapatos',
    precio:200000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/zapatos_cafes_nafnaf.png",
  },
  {
    nombre: 'Zapatos Leopardo',
    marca: "NafNaf",
    tipoPrenda: 'zapatos',
    precio:200000,
    sexo:"Femenino",
    imageUrl:"src/assets/img/prendas_nafnaf/zapatos_leopardo_nafnaf.png",
  }
]
  return (
    <>
      <header className="cabezaNafnaf">
        <Link className="logoNafnaf" to="/">
          <h1>GCO</h1>
        </Link>
        <Carro></Carro>
      </header>
      <Head />
      
      <main id='Secciones' style={{ backgroundImage: "linear-gradient(0deg, #b8b8b8 0%, #182848 50%)"}}>
        <section >
        <img style={{ width: "100%", marginTop: "10%" }} src="src/assets/img/Portadas/naf_naf_inicio.png" alt="" />
          <section className="Ropas">
            {productos.map((producto, index) => (
              <ProductItem key={index} imageUrl={producto.imageUrl}
              nombre={producto.nombre}
              precio={producto.precio} />
            ))}
          </section>
        </section>
      </main>
      <Foother />
    </>
  );
}

export default Nafnaf;