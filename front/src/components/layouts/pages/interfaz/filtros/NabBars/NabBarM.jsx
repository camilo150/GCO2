// ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../../../Styles/filtro_ropa.css"

const product = [
    {
        id: 1,
        nameProduct: 'coche',
        link: "/Mothercare-coche"
    },
    {
        id: 2,
        nameProduct: 'cuna',
        link: "/Mothercare-cuna"
    },
    {
        id: 3,
        nameProduct: 'silla',
        link: "/Mothercare-silla"
    },
    {
        id: 4,
        nameProduct: "Coche doble",
        link: "/Mothercare-coche-doble"
    },
]

const NabBarM = () => {
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

export default NabBarM;
