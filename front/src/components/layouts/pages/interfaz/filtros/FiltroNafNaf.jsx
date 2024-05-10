import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../Head'
import NabBarN from "../filtros/NabBars/NabBarN"
import Foother from '../Foother'


const FiltroNafNaf = () => {
  return (
    <>
      <header className="cabezaNafnaf">
        <Link className="logoNafnaf" to="/home">
          <h1>GCO</h1>
        </Link>
      </header>
      <Head />
      <main style={{ backgroundImage: "linear-gradient(0deg, #b8b8b8 0%, #182848 50%)"}}>
        <img style={{ width: "100%", marginTop: "10%" }} src="src/assets/img/Portadas/naf_naf_inicio.png" alt="" />
        <NabBarN/>
        <Link to={"/NafNaf"}>
          <button type='button' className='botonVerMas' style={{ margin: "0 auto", marginTop: "1rem", display: "block" }}>Ver Todo</button>
        </Link>
      </main>
      <Foother />
    </>
  )
}

export default FiltroNafNaf