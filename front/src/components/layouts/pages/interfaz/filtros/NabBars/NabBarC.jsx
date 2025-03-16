// ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../../../Styles/filtro_ropa.css"

const product = [
    {
        id: 1,
        nameProduct: 'Buzos',
        link: "/Chevignon-buzo"
    },
    {
        id: 2,
        nameProduct: 'Camisa',
        link: "/Chevignon-camisa"
    },
    {
        id: 3,
        nameProduct: 'Chaquetas',
        link: "/Chevignon-chaqueta"
    },
    {
        id: 4,
        nameProduct: "Pantalones",
        link: "/Chevignon-pantalon"
    }
]

const NabBarC = () => {
    return (
        <section>
            <div className='container-items-filtro'>
                {product.map(product => (
                    <div className='item-filtro' key={product.id}>
                        <Link to={product.link}>
                            <button className='boton-filtro'>{product.nameProduct}</button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NabBarC;
