import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const Compras = () => {
    let redireccionCasa = useNavigate()
    const comprar = () => {
        Swal.fire({
            title: "Está seguro de querer comprar?",
            text: "No hay reembolso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Compra exitosa!",
                    text: "Sus productos le llegarán en una instancia de 4-7 dias, de lo contrario contactese con nosotros.",
                    icon: "success"
                });
                redireccionCasa("/home")
            } else {
                Swal.fire({
                    title: "será redirigido al inicio",
                    icon: "info"
                });
            } redireccionCasa("/home")
        });
    }
    const redireccion = () => {
        redireccionCasa("/home")
    }
    return (
        <div>
            <div className='body-compras'></div>
            <section className='contenedor-compras' >
                <h1 className='comprar-anuncio'>Vamos, estás a un solo paso para terminar!</h1>
                <form className='formulario-compra'>
                    <img src="src/assets/img/Portadas/american_express_platinum_card.avif" className='imagen-compra' alt="" />
                    <label htmlFor="" className=''>Numero de la tarjeta</label>
                    <input type="number" maxLength="16" className='input-compras-a'
                        onInput={(e) => {

                            if (e.target.value.length > 16) {
                                e.target.value = e.target.value.slice(0, 16);
                            }
                            if (isNaN(e.target.value)) {
                                e.target.value = '';
                            }
                        }}
                    />

                    <input type="text" maxLength="20" className='input-compras-a' placeholder='  Nombre del propietario'
                        onInput={(e) => {
                            if (e.target.value.length > 20) {
                                e.target.value = e.target.value.slice(0, 20);
                            }
                            if (!/^[a-zA-Z\s]*$/.test(e.target.value)) {
                                e.target.value = '';
                            }
                        }}
                    />
                    <section className='contenedor-inputs-b'>
                        <input type="month" name="" id="" className='input-compras-b' />
                        <input
                            type="number" maxLength="3" className='input-compras-b' placeholder='   CVC'
                            onInput={(e) => {
                                if (e.target.value.length > 3) {
                                    e.target.value = e.target.value.slice(0, 3);
                                }
                                if (isNaN(e.target.value)) {
                                    e.target.value = '';
                                }
                            }}
                        />
                    </section>
                    <input type="button" name="" id="" className='boton-compra' value={"Comprar"} onClick={comprar} />
                </form>
            </section>
        </div>
    )
}

export default Compras