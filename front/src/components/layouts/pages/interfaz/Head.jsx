import React from 'react'
import { Link } from 'react-router-dom'
import Americanino from '../../../../assets/img/Portadas/americanino_link.jpg'
import Mothercare from "../../../../assets/img/Portadas/motherCare_link.png"
import Nafnaf from"../../../../assets/img/Portadas/nafnaf_link.png"
import Chevignon from "../../../../assets/img/Portadas/chevignon_link.png"
function Head() {
    const Marcas =[
    {   
        id:1,
        link:"/Americanino",
        img:Americanino
    },
    {   
        id:2,
        link:"/Mothercare",
        img:Mothercare
    },
    {   
        id:3,
        link:"/NafNaf",
        img:Nafnaf
    },
    {   
        id:4,
        link:"/Chevignon",
        img:Chevignon
    }
]
  return (
    <section className="listaMarcas">
            {Marcas.map(Marcas=>(
                <section key={Marcas.id} className='' >
                <Link to={Marcas.link} ><img src={Marcas.img} className='marca' /></Link>
                </section>
            ))}
      </section>
  )
}
export default Head