// ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../../../Styles/filtro_ropa.css"

const product = [
    {
        id: 1,
        nameProduct: 'Abrigos',
        link: "/NafNaf-abrigo"
    },
    {
        id: 2,
        nameProduct: 'Camisas',
        link: "/NafNaf-camisa"
    },
    {
        id: 3,
        nameProduct: 'Camisetas',
        link: "/NafNaf-camiseta"
    },
    {
        id: 4,
        nameProduct: "Enterizos",
        link: "/NafNaf-enterizo"
    },
    {
        id: 5,
        nameProduct: "Pantalones",
        link: "/NafNaf-pantalon"
    },
    {
        id: 6,
        nameProduct: "Zapatos",
        link: "/NafNaf-zapato"
    }
]

const NabBarN = () => {
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

export default NabBarN;
