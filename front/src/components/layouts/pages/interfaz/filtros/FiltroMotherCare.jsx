import React from 'react'
import { Link } from 'react-router-dom'
import NabBarM from "../filtros/NabBars/NabBarM"
import Head from '../Head'
import Foother from '../Foother'
import GCOIcon from './GCOIcon'

const FiltroMotherCare = () => {
    return (
        <>
            <GCOIcon></GCOIcon>
            <Head />
            <main id='main' style={{ backgroundImage: "linear-gradient(90deg, #c2e9fb 1%, #a1c4fd 100%)" }}>
                <NabBarM />
                <Link to={"/Mothercare"}>
                    <button type='button' className='botonVerMas' style={{ margin: "0 auto", marginTop: "1rem", display: "block" }}>Ver Todo</button>
                </Link>
            </main>
            <Foother />
        </>
    )
}
export default FiltroMotherCare