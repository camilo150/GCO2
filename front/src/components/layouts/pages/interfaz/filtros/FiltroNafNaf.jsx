import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../Head'
import NabBarN from "../filtros/NabBars/NabBarN"
import Foother from '../Foother'
import GCOIcon from './GCOIcon'

const FiltroNafNaf = () => {
  return (
    <>
      <GCOIcon></GCOIcon>
      <Head />
      <main style={{ backgroundImage: "linear-gradient(0deg, #b8b8b8 0%, #182848 50%)"}}>
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