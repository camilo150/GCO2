import { Flex } from 'antd'
import React from 'react'


const InicioSesion = () => {
  return (
<>
    <form className='formulario'>
        <input type="text" placeholder={"Nombre de ususario"} />
        <input type="text" placeholder={"contraseña"}/>
        <input type="text" value={"Iniciar sesion"} />

    </form>

</>
  )
}

export default InicioSesion