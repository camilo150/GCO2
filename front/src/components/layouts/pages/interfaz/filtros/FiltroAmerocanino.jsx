import React from 'react'
import { Link } from 'react-router-dom'
import NabBarA from "../filtros/NabBars/NabBarA"
import Head from '../Head'
import Foother from '../Foother'

const FiltroAmerocanino = () => {
    return (
        <>
            <header className="cabezaAmericanino">
        <Link className="logoAmericanino" to="/home">
          <h1>GCO</h1> 
        </Link>
            </header>
            <Head />
            <main id='main' style={{backgroundImage: 'linear-gradient(0deg, #5d6a7d 9%, rgba(28, 61, 126, 0.96) 49%)',border:"soild 2px black"}}>
        <img style={{ width: "100%", marginTop: "9.5%" ,borderBottom:"solid 4px black",borderTop:"solid 5px"}} src="src/assets/img/Portadas/americaninoPortada.png" alt="" />
          <NabBarA>

                </NabBarA>
             <Link to={"/Americanino"}>
                    <button type='button' className='botonVerMas' style={{margin: "0 auto",marginTop: "1rem", display: "block"}}>Ver Todo</button>
                </Link>   
            </main>
            
            <Foother />
        </>

    )
}

export default FiltroAmerocanino