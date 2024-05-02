// ProductItem.js
import React from 'react';

const ProductItem = ({ imageUrl,nombre,precio }) => {
  return (
    <div className="contenido">
      <div className="contenedor"></div>
      <img className="imagenRopa" src={imageUrl} alt="" />
      <div className='textoInfo'>{nombre}</div>
      <div className='textoInfo'>${precio}</div>
      <label htmlFor="Cantidad"  ><input type="number" placeholder='Cantidad' /></label>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default ProductItem;