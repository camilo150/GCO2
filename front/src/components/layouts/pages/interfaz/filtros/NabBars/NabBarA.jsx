// ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../../../Styles/filtro_ropa.css"

const product = [
    {
        id: 1,
        nameProduct: 'Camisas',
        link: "/Americanino-camisa"
    },
    {
        id: 2,
        nameProduct: 'Camisetas',
        link: "/Americanino-camiseta"
    },
    {
        id: 3,
        nameProduct: 'Gorras',
        link: "/Americanino-gorra"
    },
    {
        id: 4,
        nameProduct: "Medias",
        link: "/Americanino-medias"
    },
]
const NabBarA = () => {
    return (
        <section>
        <div className='container-items-filtro'>
            {product.map(product => (
                <div className='item-filtro' key={product.id}>
                    <Link to={product.link} >
                        <button className='boton-filtro'>{product.nameProduct}</button>
                    </Link>
                </div>
            ))}
        </div>
    </section>

    );
};

export default NabBarA;