import React, { useState, useEffect } from 'react';
import ChevignonWalper from "../../../../assets/img/Portadas/chevignonPresentacion.png"
import AmericaninoWalper from "../../../../assets/img/Portadas/AMERICANINO_Walper.png"
import MothercareWalper from "../../../../assets/img/Portadas/mothercareWalper.jpg"
import NafnafWalper from "../../../../assets/img/Portadas/naf_naf_inicio.png"
const Carrusel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    AmericaninoWalper,
    ChevignonWalper,
    MothercareWalper,
    NafnafWalper
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 3000); // Cambia el número para ajustar la velocidad del carrusel

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img className='carouselImg'
          key={index}
          src={image}
          alt={`Imagen ${index + 1}`}
          style={{ display: index === currentImage ? 'block' : 'none' }}
        />
      ))}
    </div>
  );
};

export default Carrusel;
