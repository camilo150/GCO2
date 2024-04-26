import React from 'react';
import { Link } from 'react-router-dom';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import ProductItem from "../interfaz/ProducItem"

function Chevignon() {
  const productos = [
    { imageUrl: "src/assets/img/prendas_Chevignon/buzo_Amarillo_Chevignon.jpeg"  },
    { imageUrl: "src/assets/img/prendas_Chevignon/buzo_Azul_chevignon.jpg" },
    { imageUrl: "src/assets/img/prendas_Chevignon/buzo_Mujer_blanco_chevignon.jpg"  },
    { imageUrl: "src/assets/img/prendas_Chevignon/buzo_Mujer_chevignon.jpg"  },
    { imageUrl: "src/assets/img/prendas_Chevignon/camisa_negro_gris.jpg" },                                         
    { imageUrl: "src/assets/img/prendas_Chevignon/camisaBlanca_chevignon.jpg"  },
    { imageUrl: "src/assets/img/prendas_Chevignon/camisaBlancaML_chevignon.jpg",  },
    { imageUrl: "src/assets/img/prendas_Chevignon/camisaNegraML_chevignon.jpg" },
    { imageUrl: "src/assets/img/prendas_Chevignon/camisaRojacuadro_chevignon.jpg" },
    { imageUrl: "src/assets/img/prendas_Chevignon/camiseta_Blanca_chevignon.jpeg" },
    { imageUrl: "src/assets/img/prendas_Chevignon/chaqueta_Chevignon.jpg" },
    { imageUrl: "src/assets/img/prendas_Chevignon/jean_AzulClaro_chevignon.jpg" },
    { imageUrl: "src/assets/img/prendas_Chevignon/jean_Blanco_chevignon.jpeg" },
    { imageUrl: "src/assets/img/prendas_Chevignon/jean_Negro_chevignon.png"  },
    { imageUrl: "src/assets/img/prendas_Chevignon/zapato_azul_chevignon.jpg" },
    { imageUrl: "src/assets/img/prendas_Chevignon/zapato_blanco_chevignon.jpg" },
    { imageUrl: "src/assets/img/prendas_Chevignon/zapato_blanco_con_negro_chevignon.jpg" },
    { imageUrl: "src/assets/img/prendas_Chevignon/Camiseta_NegraGris_chevignon.jpg" }, 
    { imageUrl: "src/assets/img/prendas_Chevignon/camiseta_Negra_chevignon.jpg" },
    { imageUrl: "src/assets/img/prendas_Chevignon/buzoMujer_chevignon.jpeg" },
  ];

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
        <section id="Secciones">
        
          <section className="Ropas" >
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

export default Chevignon;