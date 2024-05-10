import userLogo from "../../../../../assets/img/Portadas/logogco.jpg"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './Login.css'
import axios from "axios";
let apiUsuarios = "http://localhost:5174/usuarios";

const Login = () => {
  const [getUsuario, setUsuario] = useState("");
  const [getContrasena, setContrasena] = useState("");
  const [getCorreo, setCorreo] = useState("");
  let redireccion = useNavigate()

  const [usuarios, setUsuarios] = useState([]);
  const getUsuarios = async () => {
    let resultado = await axios.get(apiUsuarios);
    console.log(usuarios)
    setUsuarios(resultado.data);
  };

  useEffect(() => {
    getUsuarios()
  }, [])

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
  const iniciarSesion = () => {
    if (buscarUsuario()) {
      Swal.fire({
        title: "Bienvenido",
        text: "Será redireccionado a la página principal",
        icon: "success",
      });
      redireccion('/home')
    } else {
      Swal.fire({
        title: "Error de credenciales",
        text: "Usuario y/o contraseña no existe o errados",
        icon: "error",
      });
    }
  };

  const registrarUsuario = () => {
    redireccion('/registrar-usuario')
  }

  return (
    <body className="login">
      <h1 className='login-logo'>GCO</h1>
      <h1 className='login-anuncio'>Inicia sesion para poder comprar y disfrutar de nustras marcas!</h1>

      <form className="logo-formulario-contenedor">
        <img src={userLogo} alt="Usuario" className="icon" />
        <h2 className="login-anuncio">Iniciar sesión</h2>
        <div className="input-group">

          <input  className="login-inputs" placeholder="   Usuario"
            type="text"
            onChange={(e) => {
             setUsuario(e.target.value);
            }}
          />
        </div>
        <div className="input-group">
      
          <input className="login-inputs" placeholder="  Contraseña"
            onChange={(e) => {
              setContrasena(e.target.value);
           }}
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="input-group">
          
          <input className="login-inputs" placeholder="  Correo electronico "
            onChange={(e) => {
              setCorreo(e.target.value);
           }}
            type="text"
            name=""
            id=""
          />
        </div>
        <button onClick={iniciarSesion} type="button" className="login-boton-a">
          Iniciar sesión
        </button>
        <button onClick={registrarUsuario} type="button" className="login-boton-b">
          Crea un usuario, es gratis!
        </button>
      </form>
    </body>
  );
};

export default Login;
