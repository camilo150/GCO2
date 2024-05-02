import React from 'react';
import { Link } from 'react-router-dom';
import Foother from "../interfaz/Foother";
import Head from "../interfaz/Head";
import ProductItem from "../../pages/interfaz/ProducItem"
function Americanino() {
  const productos = [
{
  id:1,
  nombre: "camisa verde lima",
  marca: "Americanino",
  tipoPrenda: "camisa",
  precio:50000,
  sexo:"Femenino",
  imageUrl:"/src/assets/img/prendas_americanino/blusa_verde_Lima_mujer_americanino.jpg"
} ,
{
  id:2,
  nombre: "camiseta roja",
  marca: "Americanino",
  tipoPrenda: "camisa",
  precio:70000,
  sexo:"Femenino",
  imageUrl:"/src/assets/img/prendas_americanino/camisa_roja_mujer_americanino.jpg"
},
{
  id:3,
  nombre: "camiseta negra",
  marca: "Americanino",
  tipoPrenda: "camisa",
  precio:70000,
  sexo:"Femenino",
  imageUrl:"/src/assets/img/prendas_americanino/camisa_negra_americanino.jpg" 
},
{
  id:4,
  nombre: "camiseta verde militar",
  marca: "Americanino",
  tipoPrenda: "camisa",
  precio:80000,
  sexo:"Masculino",
  imageUrl:"/src/assets/img/prendas_americanino/camiseta_verde-militar_americanino.webp"
},
{
  id:5,
  nombre: "camiseta blanca",
  marca: "Americanino",
  tipoPrenda: "camisa",
  precio:40000,
  sexo:"Masculino",
  imageUrl:"/src/assets/img/prendas_americanino/camiseta_blanca_americanino.webp"
},
{  
  id:6,
  nombre: "camiseta blanca",
  marca: "Americanino",
  tipoPrenda: "camisa",
  precio:80000,
  sexo:"Femenino",
  imageUrl: "/src/assets/img/prendas_americanino/camiseta_blanca_mujer_americanino.jpg" ,
},
{
  id:7,
  nombre: "camisa gris",
  marca: "Americanino",
  tipoPrenda: "camiseta",
  precio:40000,
  sexo:"Masculino",
  imageUrl:"/src/assets/img/prendas_americanino/camiseta_gris_americanino.webp"
},
{
  id:8,
  nombre: "camisa verde lima",
  marca: "Americanino",
  tipoPrenda: "camisa",
  precio:60000,
  sexo:"Femenino",
  imageUrl:"/src/assets/img/prendas_americanino/camisa_verde_lima_mujer_americanino.jpg"

},
{   id:9,
  nombre: "camiseta naranga",
  marca: "Americanino",
  tipoPrenda: "camiseta",
  precio:40000,
  sexo:"Masculino",
  imageUrl:"/src/assets/img/prendas_americanino/camiseta_naranja_americanino.webp"

},
{
  id:10,
  nombre: "camiseta negra",
  marca: "Americanino",
  tipoPrenda: "camiseta",
  precio:40000,
  sexo:"Masculino",
  imageUrl:"/src/assets/img/prendas_americanino/camiseta_negra_americanino.webp"
},
{
  id:11,
  nombre: "gorra blanca",
  marca: "Americanino",
  tipoPrenda: "gorra",
  precio:50000,
  sexo:"Masculino",
  imageUrl:"/src/assets/img/prendas_americanino/gorra_blanca_americanino.jpg"
},
{
  id:12,
  nombre: "gorra de caminonero azul",
  marca: "Americanino",
  tipoPrenda: "gorra",
  precio:50000,
  sexo:"Masculino",
  imageUrl:"/src/assets/img/prendas_americanino/gorra_camionero_azul_americanino.jpg"
},
{
  id:13,
  nombre: "gorra deportiva negra",
  marca: "Americanino",
  tipoPrenda: "gorra",
  precio:60000,
  sexo:"Masculino",
  imageUrl:"/src/assets/img/prendas_americanino/gorra_deportiva_negra_americanino.jpg"
},
{
  id:14,
  nombre: "gorra negra",
  marca: "Americanino",
  tipoPrenda: "gorra",
  precio:50000,
  sexo:"Masculino",
  imageUrl:"/src/assets/img/prendas_americanino/gorra_negra_americanino.jpg"
},
{   
  id:15,
  nombre: "gorra rosa",
  marca: "Americanino",
  tipoPrenda: "gorra",
  precio:40000,
  sexo:"Masculino",
  imageUrl:"/src/assets/img/prendas_americanino/gorra_rosa_americanio.jpg"
},
{
  id:16,
  nombre: "medias azules",
  marca: "Americanino",
  tipoPrenda: "medias",
  precio:20000,
  sexo:"Masculino",
  imageUrl:"/src/assets/img/prendas_americanino/medias_azules_americanino.jpg"
},
{
  id:17,
  nombre: "medias rosas",
  marca: "Americanino",
  tipoPrenda: "medias",
  precio:10000,
  sexo:"Femenino",
  imageUrl:"/src/assets/img/prendas_americanino/medias_rosa_americanino.jpg"
},
{
  id:18,
  nombre: "medias vanilla",
  marca: "Americanino",
  tipoPrenda: "medias",
  precio:20000,
  sexo:"Femenino",
  imageUrl:"/src/assets/img/prendas_americanino/medias_vainilla_americanino.jpg"
},
{
  id:19,
  nombre: "medias vino tinto",
  marca: "Americanino",
  tipoPrenda: "medias",
  precio:20000,
  sexo:"Femenino",
  imageUrl:"/src/assets/img/prendas_americanino/medias_vinotinto_americanino.jpg"
},
{
  id:20,
  nombre: "medias tobilleras vino tinto",
  marca: "Americanino",
  tipoPrenda: "medias",
  precio:10000,
  sexo:"Masculino",
  imageUrl:"/src/assets/img/prendas_americanino/tobillera_vinotinto_americanino.jpg"
} 
]
;
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
export default Americanino;