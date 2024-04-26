import React from 'react'
import { Link } from 'react-router-dom'
function Foother() {
  return (
    <footer className="informacion">
      <div className="contactos">
        <img src="/src/assets/img/iconos/icons8-teléfono-50.png" alt=""/>
        <Link to="https://wa.me/3022633615" target="_blank">Telefono De Contacto</Link>
    </div>
    <div className="contactos">
        <img src="/src/assets/img/iconos/icons8-correo-24.png" alt=""/>
        <Link to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvlHShkclMXhJMbnjfmCfsJRDRHpWPDwnxDpPZcWlsRtzSHxwlHvJMZTwTHHcLDGSPtLbq"
            target="_blank">Correo de contacto: camicastrillon2314@gmail.com</Link>
    </div>
    <div className="contactos">
        <img src="/src/assets/img/iconos/icons8-ubicación-64.png" alt=""/>
        <Link to="https://www.google.com/maps/place/32%C2%B040'33.8%22N+117%C2%B009'28.1%22W/@32.6760573,-117.1603832,547m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d32.6760528!4d-117.1578083?hl=es&entry=ttu"
        target="_blank" >Ubicacíon</Link>
    </div>
</footer>
  )
}

export default Foother