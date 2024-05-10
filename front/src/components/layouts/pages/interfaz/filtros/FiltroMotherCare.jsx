import React from 'react'
import { Link } from 'react-router-dom'
import NabBarM from "../filtros/NabBars/NabBarM"
import Head from '../Head'
import Foother from '../Foother'

const FiltroMotherCare = () => {
    return (
        <>
        <header className="cabezaMothercare">
        <Link className="logoMothercare" to="/home">
          <h1>GCO</h1>
        </Link>
            </header>
            <Head />
            <main id='main' style={{backgroundImage:"linear-gradient(90deg, #c2e9fb 1%, #a1c4fd 100%)"}}>
          <img src="/src/assets/img/Portadas/mama_bebe_motherCare.jpg" style={{ width: '100%', borderBottom: 'solid 2px black', marginTop: '9.5%' }} alt="" />
            <NabBarM/>
                <Link to={"/Mothercare"}>
                    <button type='button' className='botonVerMas' style={{margin: "0 auto",marginTop: "1rem", display: "block"}}>Ver Todo</button>
                </Link>
            </main>
            <Foother />
        </>

    )
}

export default FiltroMotherCare