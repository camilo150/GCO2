import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: 20,
  width:500,
margin:140,


};
const Carrusel = () => (
  <Carousel autoplay>
    <div>
      <img src="/src/assets/img/Portadas/AMERICANINO.jpg"  alt="" />
    </div>
    <div>
    <img src="/src/assets/img/Portadas/chevignon.png"  alt="" />
    </div>
    <div>
    <img src="/src/assets/img/Portadas/AMERICANINO.jpg" alt="" />
    </div>
    <div>
    <img src="/src/assets/img/Portadas/AMERICANINO.jpg" style={contentStyle} alt="" />
    </div>
  </Carousel>
);
export default Carrusel;