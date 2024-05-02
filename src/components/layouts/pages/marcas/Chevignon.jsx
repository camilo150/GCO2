import React from 'react';
import { Link } from 'react-router-dom';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import ProductItem from "../interfaz/ProducItem"
function Chevignon() {
  const productos = [
  {
    nombre: 'buzo amarillo',
    marca: "Chevignon",
    tipoPrenda: 'buzo',
    precio:500000,
    sexo: 'Masculino',
    imageUrl:"src/assets/img/prendas_Chevignon/buzo_Amarillo_Chevignon.jpeg"
  },
  {
    nombre: 'buzo azul',
    marca: "Chevignon",
    tipoPrenda: 'buzo ',
    precio:800000,
    sexo: 'Masculino',
    imageUrl:'src/assets/img/prendas_Chevignon/buzo_Azul_chevignon.jpg',
  },
  {
    nombre: 'buzo blanco',
    marca: "Chevignon",
    tipoPrenda: 'buzo ',
    precio:40000,
    sexo:'Femenino',
    imageUrl:'src/assets/img/prendas_Chevignon/buzo_Mujer_blanco_chevignon.jpg',
  },
  {
    nombre: 'buzo',
    marca: "Chevignon",
    tipoPrenda: 'buzo ',
    precio:20000,
    sexo: 'Femenino',
    imageUrl:'src/assets/img/prendas_Chevignon/buzo_Mujer_chevignon.jpg',
  },
  {
    nombre: 'camisa negra',
    marca: "Chevignon",
    tipoPrenda: 'camisa',
    precio:50000,
    sexo: 'Masculino',
    imageUrl: 'src/assets/img/prendas_Chevignon/camisa_negro_gris.jpg'
  },
  {
    nombre: 'camisa blanca',
    marca: "Chevignon",
    tipoPrenda: 'camisa ',
    precio:50000,
    sexo: 'Masculino',
    imageUrl: 'src/assets/img/prendas_Chevignon/camisaBlanca_chevignon.jpg'
  },
  {
    nombre: 'camisa blanca',
    marca: "Chevignon",
    tipoPrenda: 'camisa  ',
    precio:20000,
    sexo: 'Masculino',
    imageUrl: 'src/assets/img/prendas_Chevignon/camisaBlancaML_chevignon.jpg'
  },
  {
    nombre: 'camisa negra',
    marca: "Chevignon",
    tipoPrenda: 'camisa',
    precio:20000,
    sexo: 'Masculino',
    imageUrl: 'src/assets/img/prendas_Chevignon/camisaNegraML_chevignon.jpg',
  },
  {
    nombre: 'camisa roja',
    marca: "Chevignon",
    tipoPrenda: 'camisa',
    precio:30000,
    sexo: 'Masculino',
    imageUrl: 'src/assets/img/prendas_Chevignon/camisaRojacuadro_chevignon.jpg'
  },
  {
    nombre: 'camisa blanca',
    marca: "Chevignon",
    tipoPrenda: 'camisa',
    precio:50000,
    sexo: 'Masculino',
    imageUrl: 'src/assets/img/prendas_Chevignon/camiseta_Blanca_chevignon.jpeg'
  },
  {
    nombre: 'chaqueta azul',
    marca: "Chevignon",
    tipoPrenda: 'chaqueta',
    precio:500000,
    sexo: 'mujer',
    imageUrl: 'src/assets/img/prendas_Chevignon/chaqueta_Chevignon.jpg'
  },
  {
    nombre: 'jean azul',
    marca: "Chevignon",
    tipoPrenda: 'pantalon ',
    precio:90000,
    sexo: 'Masculino',
    imageUrl: 'src/assets/img/prendas_Chevignon/jean_AzulClaro_chevignon.jpg'
  },
  {
    nombre: 'jean blanco',
    marca: "Chevignon",
    tipoPrenda: 'pantalon  ',
    precio:80000,
    sexo: 'Masculino',
    imageUrl: 'src/assets/img/prendas_Chevignon/jean_Blanco_chevignon.jpeg'
  },
  {
    nombre: 'jean negro',
    marca: "Chevignon",
    tipoPrenda: 'pantalon ',
    precio:20000,
    sexo: 'Masculino',
    imageUrl: 'src/assets/img/prendas_Chevignon/jean_Negro_chevignon.png'
  },
  {
    nombre: 'zapato azul',
    marca: "Chevignon",
    tipoPrenda: 'zapato ',
    precio:25000,
    sexo: 'Masculino',
    imageUrl: 'src/assets/img/prendas_Chevignon/zapato_azul_chevignon.jpg'
  },
  {
    nombre: 'zapato blanco',
    marca: "Chevignon",
    tipoPrenda: 'zapato ',
    precio:80000,
    sexo: 'Masculino',
    imageUrl: 'src/assets/img/prendas_Chevignon/zapato_blanco_chevignon.jpg'
  },
  
  {
    nombre: 'zapato blanco',
    marca: "Chevignon",
    tipoPrenda: 'zapato ',
    precio:80000,
    sexo: 'Masculino',
    imageUrl: 'src/assets/img/prendas_Chevignon/zapato_blanco_con_negro_chevignon.jpg'
  },
  {
    nombre: 'buzo rosado',
    marca: "Chevignon",
    tipoPrenda: 'buzo ',
    precio:100000,
    sexo: 'Femenino',
    imageUrl: 'src/assets/img/prendas_Chevignon/buzoMujer_chevignon.jpeg'
  },
  {
    nombre: 'camiseta negra',
    marca: "Chevignon",
    tipoPrenda: 'camiseta ',
    precio:80000,
    sexo: 'Masculino',
    imageUrl: 'src/assets/img/prendas_Chevignon/camiseta_Negra_chevignon.jpg'
  },
  {
    nombre: 'camiseta gris con negro',
    marca: "Chevignon",
    tipoPrenda: 'camiseta ',
    precio:80000,
    sexo: 'Masculino',
    imageUrl: 'src/assets/img/prendas_Chevignon/Camiseta_NegraGris_chevignon.jpg'
  },
  
  ]
  return (
    <>
      <header className="cabezaChevignon">
        <Link className="logoChevignon" to="/">
          <h1>GCO</h1>
        </Link>
     
      </header>
      <Head />
      <main id='main'style={{backgroundImage: 'linear-gradient(0deg, rgba(9, 8, 8, 0.83) 0%, #d0cfcf 77%)',}}>
      <section id="tituloChevignon">
        <h1 id="contenidoTituloChevignon">CHEVIGNON</h1>
       </section>
          <img src="src/assets/img/Portadas/chevignonPresentacion.png" style={{width:"100%",}} alt="chevignon portada" />
        <section>
         <section className="Ropas" >
              {productos.map((productos, index) => (
              <ProductItem key={index}
               imageUrl={productos.imageUrl} 
               nombre={productos.nombre}
               precio={productos.precio}/>
            ))}
          </section>
        </section>
      </main>
      <Foother />
    </>
  );
}
export default Chevignon;
