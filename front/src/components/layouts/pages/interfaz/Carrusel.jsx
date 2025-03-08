import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChevignonWalper from "../../../../assets/img/Portadas/Chevignon_P.png"
import AmericaninoWalper from "../../../../assets/img/Portadas/AMERICANINO_Walper.png"
import MothercareWalper from "../../../../assets/img/Portadas/mothercareWalper.jpg"
import NafnafWalper from "../../../../assets/img/Portadas/Chevignon_P.png"

const Carrusel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: AmericaninoWalper, route: '/Filtro-Americanino' },
    { src: ChevignonWalper, route: '/Filtro-Chevignon  ' },
    { src: MothercareWalper, route: '/Filtro-MotherCare' },
    { src: NafnafWalper, route: '/Filtro-NafNaf' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 4000); // Cambia el número para ajustar la velocidad del carrusel

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carrusel">
      {images.map((image, index) => (
        <Link to={image.route} key={index}>
          <img className='carruselImg'
            src={image.src}
            alt={`Imagen ${index + 1}`}
            style={{ display: index === currentImage ? 'block' : 'none' }}
          />
        </Link>
      ))}
    </div>
  );
};

export default Carrusel;
