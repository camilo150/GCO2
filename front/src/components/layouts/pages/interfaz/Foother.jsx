import React from 'react'
import { Link } from 'react-router-dom'
function Foother() {
  return (
    <footer className="informacion">
      <div className="contactos">
        <img src="/src/assets/img/iconos/icons8-teléfono-50.png" alt=""/>
        <Link to="https://wa.me/3022633615" target="_blank"> : Telefono De Contacto</Link>
    </div>
    <div className="contactos">
        <img src="/src/assets/img/iconos/icons8-correo-24.png" alt=""/>
        <Link to="mailto:camicastrillon2314@gmail.com"
            target="_blank"> : Correo de contacto</Link>
    </div>
    <div className="contactos">
        <img src="/src/assets/img/iconos/icons8-ubicación-64.png" alt=""/>
        <Link to="https://www.google.com/maps/place/Gator+Beach/@32.6733251,-117.1706097,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMf-NBzc2ew52gLhDTnTiV9at-hckjEGOE4cTe0!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMf-NBzc2ew52gLhDTnTiV9at-hckjEGOE4cTe0%3Dw114-h86-k-no!7i3264!8i2448!4m13!1m5!3m4!2zMzLCsDQwJzMzLjgiTiAxMTfCsDA5JzI4LjEiVw!8m2!3d32.6760556!4d-117.1578056!3m6!1s0x80d9532a52be3be9:0x627998496686e7b9!8m2!3d32.6733251!4d-117.1706097!10e5!16s%2Fg%2F11g6pw1k8m?hl=es&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
        target="_blank" > : Ubicacíon</Link>
    </div>
</footer>
  )
}

export default Foother