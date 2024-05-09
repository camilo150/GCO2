import React from 'react'
import { Link } from 'react-router-dom'
import NabBarA from "../filtros/NabBars/NabBarA"
import Head from '../Head'
import Foother from '../Foother'

const FiltroAmerocanino = () => {
    return (
        <>
            <header className="cabeza">
                <Link className="logo" to="/home">
                    <h1>GCO</h1>
                </Link>
            </header>
            <Head />
            <main style={{ marginTop: "10.5rem", marginBottom: "2rem", }}>
                <NabBarA>

                </NabBarA>
                <Link to={"/Americanino"}>
                    <button type='button' className='linkIicioImagen' style={{margin: "0 auto",marginTop: "1rem", display: "block"}}>Ver Todo</button>
                </Link>
            </main>
            <Foother />
        </>

    )
}

export default FiltroAmerocanino