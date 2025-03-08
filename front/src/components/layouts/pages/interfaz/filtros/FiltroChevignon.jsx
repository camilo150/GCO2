import React from 'react'
import { Link } from 'react-router-dom'
import NabBarC from "../filtros/NabBars/NabBarC"
import Head from '../Head'
import Foother from '../Foother'
import GCOIcon from './GCOIcon'

const FiltroMotherCare = () => {
  return (
    <>
      <GCOIcon></GCOIcon>
      <Head />
      <main id='main' style={{ backgroundImage: 'linear-gradient(0deg, rgba(9, 8, 8, 0.83) 0%, #d0cfcf 77%)', }}>
        <NabBarC />
        <Link to={"/Chevignon"}>
          <button type='button' className='botonVerMas' style={{ margin: "0 auto", marginTop: "1rem", display: "block" }}>Ver Todo</button>
        </Link>
      </main>
      <Foother />
    </>
  )
}
export default FiltroMotherCare