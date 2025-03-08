import Americanino_P from "./../../../../assets/img/Portadas/Americanino_P.png"
import Chevignon_P from "./../../../../assets/img/Portadas/Chevignon_P.png"
import Nafnaf_P from "./../../../../assets/img/Portadas/Nafnaf_P.png"
import Mothercare_P from "./../../../../assets/img/Portadas/MotherCare_P.jpg"
import React from 'react'
import { useLocation } from "react-router-dom"

const ImagenesDePortada = () => {
    const Imagenes = [
        {nombre:"Americanino", url:Americanino_P, marca:"Americanino"},
        {nombre:"Chevignon", url:Chevignon_P, marca:"Chevignon"},
        {nombre:"Nafnaf", url:Nafnaf_P, marca:"NafNaf"},
        {nombre:"Mothercare", url:Mothercare_P, marca:"Mothercare"}
    ]

    const location = useLocation()

    const filterImage = Imagenes.filter(Imagenes_p => {
        const brandPath = `/${Imagenes_p.marca}`
        return location.pathname === brandPath
    });

  return (
    <div>
        {filterImage.map(Imagenes_p => (
            <div key={Imagenes_p.marca} >
             <img
              className="Imagenes_P"
              src={Imagenes_p.url} 
              alt={Imagenes_p.nombre}/>
            </div>
        ))}
    </div>
  )
}

export default ImagenesDePortada