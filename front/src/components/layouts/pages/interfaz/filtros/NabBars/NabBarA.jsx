// ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const product = [
    {
        nameProduct: 'Camisas',
        imageUrl: "/src/assets/img/prendas_americanino/camisa_negra_americanino.jpg",
        link: "/Americanino-Camisas"
    },
    {
        nameProduct: 'Camisetas',
        imageUrl: '/src/assets/img/prendas_americanino/camiseta_verde-militar_americanino.webp',
        link: "/Americanino-Camisetas"
    },
    {
        nameProduct: 'Gorras',
        imageUrl: '/src/assets/img/prendas_americanino/gorra_blanca_americanino.jpg',
        link: "/Americanino-Gorras"
    },
    {
        nameProduct: "Medias",
        imageUrl: "/src/assets/img/prendas_americanino/medias_azules_americanino.jpg",
        link: "/Americanino-Medias"
    },
]

const NabBarA = ({ imageUrl }) => {
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

export default NabBarA;