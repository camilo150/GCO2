import React from 'react'
import { Link } from 'react-router-dom'
import NabBarA from "../filtros/NabBars/NabBarA"
import Head from '../Head'
import Foother from '../Foother'
import GCOIcon from './GCOIcon'

const FiltroAmerocanino = () => {
    return (
        <>
            <GCOIcon></GCOIcon>
            <Head />
            <main id='main' style={{backgroundImage: 'linear-gradient(0deg, #5d6a7d 9%, rgba(28, 61, 126, 0.96) 49%)',border:"soild 2px black"}}>
           <NabBarA></NabBarA>
            <Link to={"/Americanino"}>
                <button type='button' className='botonVerMas' style={{margin: "0 auto",marginTop: "1rem", display: "block"}}>Ver Todo</button>
            </Link>   
            </main>
            
            <Foother />
        </>

    )
}

export default FiltroAmerocanino