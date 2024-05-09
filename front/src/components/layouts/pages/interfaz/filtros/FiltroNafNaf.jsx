import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../Head'
import NabBarN from "../filtros/NabBars/NabBarN"
import Foother from '../Foother'


const FiltroNafNaf = () => {
  return (
    <>
      <header className="cabeza">
        <Link className="logo" to="/home">
          <h1>GCO</h1>
        </Link>
      </header>
      <Head />
      <main style={{ marginTop: "10.5rem", marginBottom: "2rem", }}>
        <NabBarN />
        <Link to={"/NafNaf"}>
          <button type='button' className='linkIicioImagen' style={{ margin: "0 auto", marginTop: "1rem", display: "block" }}>Ver Todo</button>
        </Link>
      </main>
      <Foother />
    </>
  )
}

export default FiltroNafNaf