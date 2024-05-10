// ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const product = [
    {
        nameProduct: 'Buzos',
        imageUrl: "src/assets/img/prendas_Chevignon/buzo_Amarillo_Chevignon.jpeg",
        link: "/Chevignon-buzo"
    },
    {
        nameProduct: 'Camisa',
        imageUrl: 'src/assets/img/prendas_Chevignon/camisa_negro_gris.jpg',
        link: "/Chevignon-camisa"
    },
    {
        nameProduct: 'Chaquetas',
        imageUrl: 'src/assets/img/prendas_Chevignon/chaqueta_Chevignon.jpg',
        link: "/Chevignon-chaqueta"
    },
    {
        nameProduct: "Pantalones",
        imageUrl: "src/assets/img/prendas_Chevignon/jean_AzulClaro_chevignon.jpg",
        link: "/Chevignon-pantalon"
    },
]

const NabBarC = ({ imageUrl }) => {
    return (
        <section style={{marginTop:"10%"}}>
            <div className='container-items'>
                {product.map(product => (
                    <div className='item' key={product.marca}>
                        <figure>
                            <img src={product.imageUrl} alt={product.nameProduct} />
                        </figure>
                        <div className='info-product'>
                            <h2>{product.nameProduct}</h2>
                            <Link to={product.link} className='linkIicioImagen' >
                                <button>VER MAS</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NabBarC;