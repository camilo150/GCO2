// ProductItem.js
import React from 'react';

const ProductItem = ({ imageUrl }) => {
  return (
    <div className="contenido">
      <div className="contenedor"></div>
      <img className="imagenRopa" src={imageUrl} alt="" />
      <label htmlFor="Cantidad"  ><input type="number" placeholder='Cantidad' /></label>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default ProductItem;