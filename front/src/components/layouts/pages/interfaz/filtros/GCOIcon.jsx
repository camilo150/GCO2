import React from 'react'
import { Link } from 'react-router-dom'
const GCOIcon = () => {
  return (
    <>
    <header className='Top'>
      <Link className='icono-GCO' to={"/home"}>
        <h1>GCO</h1>
    </Link>
    </header>
    </>
  )
}

export default GCOIcon