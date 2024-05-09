// ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const product=[
  {
  nameProduct: 'Camiseta Negra ',
  marca: "NafNaf",
  price: 315000,
  imageUrl: "src/assets/img/prendas_nafnaf/camiseta_negra_mujer_nafnaf.png",
  link:"/NafNaf"
},
{
  nameProduct: 'coche naranja',
  marca: 'Mothercare',
  price: 550000,
  imageUrl: '/src/assets/img/prendas_mothercare/coche_naranja.jpg',
  link:"/Mothercare"
},
{
  nameProduct: 'camisa blanca',
  marca: "Chevignon",
  price: 20000,
  sexo: 'Masculino',
  imageUrl: 'src/assets/img/prendas_Chevignon/camisaBlancaML_chevignon.jpg',
  link:"/Chevignon"
},
 { 
  nameProduct: "camisa roja",
  marca: "Americanino",
  price: 70000,
  sexo: "Femenino",
  imageUrl: "/src/assets/img/prendas_americanino/camisa_roja_mujer_americanino.jpg",
  link:"/Americanino"
},
]

const NabBar = ({ imageUrl }) => {
  return (
<div className='container-items'>
			{product.map(product => (
				<div className='item' key={product.marca}>
					<figure>
						<img src={product.imageUrl} alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
						<h2>{product.nameProduct}</h2>
						<p className='price'>${product.price}</p>
						<Link to={product.link} className='linkIicioImagen' >
							<button>VER MAS</button>
						</Link>
					</div>
				</div>
			))}
		</div>
  );
};

export default NabBar;