import React from 'react'
import { Link } from 'react-router-dom'
import NabBarM from "../filtros/NabBars/NabBarM"
import Head from '../Head'
import Foother from '../Foother'

const FiltroMotherCare = () => {
    return (
        <>
            <header className="cabeza">
                <Link className="logo" to="/home">
                    <h1>GCO</h1>
                </Link>
            </header>
            <Head />
            <main style={{ marginTop: "10.5rem", marginBottom: "2rem"}}>
                <NabBarM/>
                <Link to={"/Mothercare"}>
                    <button type='button' className='linkIicioImagen' style={{margin: "0 auto",marginTop: "1rem", display: "block"}}>Ver Todo</button>
                </Link>
            </main>
            <Foother />
        </>

    )
}

export default FiltroMotherCare