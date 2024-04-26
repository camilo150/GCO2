import React from 'react'
import { Link } from 'react-router-dom'
function Head() {
  return (
    <section className="listaMarcas">
            <Link className="marca" to="/Americanino">
                <img className="marca" src="/src/assets/img/Portadas/AMERICANINO.jpg" alt="americanino"/>
            </Link>

            <Link className="marca" to="/Mothercare">
                <img className="marca" src="/src/assets/img/Portadas/mother_care.png" alt="mother care"/>
            </Link>

            <Link className="marca" to="/Nafnaf">
                <img className="marca" src="/src/assets/img/Portadas/naf_naf.png" alt="naf naf"/>
            </Link>

            <Link className="marca" to="/Chevignon">
                <img className="marca" src="/src/assets/img/Portadas/chevignon.png" alt="chevignon"/>
            </Link>
      </section>
  )
}
export default Head