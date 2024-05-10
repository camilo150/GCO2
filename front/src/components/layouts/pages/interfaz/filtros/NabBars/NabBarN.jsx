// ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const product = [
    {
        nameProduct: 'Abrigos',
        imageUrl: "src/assets/img/prendas_nafnaf/abrigo_azul_claro_mujer_nafna.png",
        link: "/NafNaf-abrigo"
    },
    {
        nameProduct: 'Camisas',
        imageUrl: 'src/assets/img/prendas_nafnaf/camisas_blanca_mujer_nafnaf.png',
        link: "/NafNaf-camisa"
    },
    {
        nameProduct: 'Camisetas',
        imageUrl: 'src/assets/img/prendas_nafnaf/camiseta_negra_mujer_nafnaf.png',
        link: "/NafNaf-camiseta"
    },
    {
        nameProduct: "Enterizos",
        imageUrl: "src/assets/img/prendas_nafnaf/enterizo_cafe_mujer_nafnaf.png",
        link: "/NafNaf-enterizo"
    },
    {
        nameProduct: "Pantalones",
        imageUrl: "src/assets/img/prendas_nafnaf/pantalon_acampanado_azul_mujer_nafnaf.png",
        link: "/NafNaf-pantalon"
    },
    {
        nameProduct: "Zapatos",
        imageUrl: "src/assets/img/prendas_nafnaf/zapato_beige_nafnaf.png",
        link: "/NafNaf-zapato"
    }
]

const NabBarN = ({ imageUrl }) => {
    return (
        <section style={{marginTop:"10%"}}>
            <div className='container-items' >
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

export default NabBarN;