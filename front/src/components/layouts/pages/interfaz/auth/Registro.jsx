import { useState } from "react";
import { usuarios } from "../../../../database/dataBase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './Login.css'
import axios from "axios";
let apiUsuarios = "http://localhost:5174/usuarios";

const Registro = () => {
    const [getUsuario, setUsuario] = useState("");
    const [getContrasena, setContrasena] = useState("");
    const [getCorreo, setCorreo] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    let redireccion = useNavigate()

    const buscarUsuario = () => {
        let estado = usuarios.some((usuario) => {
            if (
                getUsuario === usuario.usuario &&
                getContrasena === usuario.contrasena &&
                getCorreo === usuario.correo
            ) {
                return true;
            }
        });
        return estado;
    };

    const agrearUsuario = async () => {
        let usuarioNuevo = {
            id: Math.round(Math.random() * 100).toFixed(0),
            usuario: getUsuario,
            contrasena: getContrasena,
            correo: getCorreo
        }
        await axios.post(apiUsuarios, usuarioNuevo)
    }

    const registrarUsuario = () => {
        if (buscarUsuario()) {
            Swal.fire({
                title: "Error",
                text: "Usuario ya existe en la base de datos",
                icon: "error",
            });
        } else {
            agrearUsuario()
            Swal.fire({
                title: "Bienvenido",
                text: "Serás redireccionado al Login",
                icon: "success",
            });
            redireccion('/')
        }
    };

    const iniciarSesion = () => {
        redireccion('/')
    }

    return (
        <body className="login">


            <form className="logo-formulario-contenedor2">
                <h2 className="login-anuncio">Crear usuario nuevo</h2>
                <div className="input-group">
                    <input className="login-inputs" placeholder="   Usuario"
                        type="text"
                        onChange={(e) => {
                            setUsuario(e.target.value);
                        }}
                    />
                </div>
                <div className="input-group">
                    <input className="login-inputs" placeholder="   Contraseña"
                        onChange={(e) => {
                            setContrasena(e.target.value);
                        }}
                        type="text"
                        name=""
                        id=""
                    />
                </div>
                <div className="input-group">
                    <input className="login-inputs" placeholder="   Correo"
                        onChange={(e) => {
                            setCorreo(e.target.value);
                        }}
                        type="text"
                        name=""
                        id=""
                    />
                </div>
                <button onClick={registrarUsuario} type="button" className="login-boton-a">
                    Registrar Usuario
                </button>
                <button onClick={iniciarSesion} type="button" className="login-boton-b">
                    Iniciar sesión
                </button>
            </form>
        </body>
    );
};

export default Registro;
