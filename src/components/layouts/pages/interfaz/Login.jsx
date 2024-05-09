import React from 'react'
import Foother from "../interfaz/Foother"

function Login() {
  return (
  <>
    <body className='login'>
    <h1 className='login-logo'>GCO</h1>
    <h1 className='login-anuncio'>Inicia sesion para poder comprar!</h1>
    <img className='logo-isotipo' src="src/assets/img/Portadas/gco-logo.webp" alt="" />
    <form className='logo-formulario-contenedor'> 
        <input className='login-inputs' type="text" placeholder='    correo electronico' />
        <input className='login-inputs' type="text" placeholder='    contraseña'/>
        <input className='login-boton' type="button" value={"Iniciar sesión"} />
    </form>
    </body>
    <Foother/>
    </>
  )
}

export default Login