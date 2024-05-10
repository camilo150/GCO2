// ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const product = [
    {
        nameProduct: 'coche',
        imageUrl: "/src/assets/img/prendas_mothercare/coche_rojo.jpg",
        link: "/Mothercare-coche"
    },
    {
        nameProduct: 'cuna',
        imageUrl: '/src/assets/img/prendas_mothercare/cuna_blanca.jpg',
        link: "/Mothercare-cuna"
    },
    {
        nameProduct: 'silla',
        imageUrl: '/src/assets/img/prendas_mothercare/silla_para_bebe_azul.jpg',
        link: "/Mothercare-silla"
    },
    {
        nameProduct: "Coche doble",
        imageUrl: "/src/assets/img/prendas_mothercare/coche_doble.jpg",
        link: "/Mothercare-coche-doble"
    },
]

const NabBarM = ({ imageUrl }) => {
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

export default NabBarM;