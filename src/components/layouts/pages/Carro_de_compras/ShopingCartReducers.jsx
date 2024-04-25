import React, {createContext,useState} from "react"

export const ShopingCartReducersContext = createContext()

const ShpingCartReducers=({children})=>{
    const [cart,setCart]=useState([])
  const [products]=useState( [
        {
            "id":1,
            "nombre": "camisa verde lima",
            "marca": "Americanino",
            "TipoPrenda": "camisa",
            "Precio":50000,
            "Sexo":"Femenino",
            "imagenUrl":"/src/assets/img/prendas_americanino/blusa_verde_Lima_mujer_americanino.jpg"
        } ,
        {
            "id":2,
            "nombre": "camiseta roja",
            "marca": "Americanino",
            "TipoPrenda": "camisa",
            "Precio":70000,
            "Sexo":"Femenino",
            "imagenUrl":"/src/assets/img/prendas_americanino/camisa_roja_mujer_americanino.jpg"
        },
        {
            "id":3,
            "nombre": "camiseta negra",
            "marca": "Americanino",
            "TipoPrenda": "camisa",
            "Precio":70000,
            "Sexo":"Femenino",
            "imagenUrl":"/src/assets/img/prendas_americanino/camisa_negra_americanino.jpg"
        },
        {
            "id":4,
            "nombre": "camiseta negra",
            "marca": "Americanino",
            "TipoPrenda": "camisa",
            "Precio":70000,
            "Sexo":"Femenino",
            "imagenUrl":"/src/assets/img/prendas_americanino/camisa_verde_lima_mujer_americanino.jpg"
        },
        {
            "id":5,
            "nombre": "camiseta verde militar",
            "marca": "Americanino",
            "TipoPrenda": "camisa",
            "Precio":80000,
            "Sexo":"Masculino",
            "imagenUrl":"/src/assets/img/prendas_americanino/camiseta_verde-militar_americanino.webp"
        },
        {
            "id":6,
            "nombre": "camiseta blanca",
            "marca": "Americanino",
            "TipoPrenda": "camisa",
            "Precio":"/src/assets/img/prendas_americanino/camiseta_blanca_americanino.webp"
        },
        {   "id":7,
            "nombre": "camiseta blanca",
            "marca": "Americanino",
            "TipoPrenda": "camisa",
            "Precio":80000,
            "Sexo":"Femenino",
            "imagenUrl":"/src/assets/img/prendas_americanino/camiseta_blanca_mujer_americanino.jpg"
        },
        {
            "id":8,
            "nombre": "camisa gris",
            "marca": "Americanino",
            "TipoPrenda": "camiseta",
            "Precio":40000,
            "Sexo":"Masculino",
            "imagenUrl":"/src/assets/img/prendas_americanino/camiseta_gris_americanino.webp"
        },
        {
            "id":9,
            "nombre": "camiseta blanca",
            "marca": "Americanino",
            "TipoPrenda": "camisa",
            "Precio":80000,
            "Sexo":"Masculino",
            "image":"/src/assets/img/prendas_americanino/camiseta_naranja_americanino.webp" 
        
        },
        {   "id":10,
            "nombre": "camiseta naranga",
            "marca": "Americanino",
            "TipoPrenda": "camiseta",
            "Precio":40000,
            "Sexo":"Masculino",
            "imagenUrl":"/src/assets/img/prendas_americanino/camiseta_negra_americanino.webp"
        
        },
        {
            "id":11,
            "nombre": "camiseta negra",
            "marca": "Americanino",
            "TipoPrenda": "camiseta",
            "Precio":40000,
            "Sexo":"Masculino",
            "imagenUrl":"/src/assets/img/prendas_americanino/gorra_blanca_americanino.jpg"
        },
        {
            "id":12,
            "nombre": "gorra blanca",
            "marca": "Americanino",
            "TipoPrenda": "gorra",
            "Precio":50000,
            "Sexo":"Masculino",
            "imagenUrl":"/src/assets/img/prendas_americanino/gorra_blanca_americanino.jpg"
        },
        {
            "id":13,
            "nombre": "gorra de caminonero azul",
            "marca": "Americanino",
            "TipoPrenda": "gorra",
            "Precio":50000,
            "Sexo":"Masculino",
            "imagenUrl":"/src/assets/img/prendas_americanino/gorra_camionero_azul_americanino.jpg"
        },
        {
            "id":14,
            "nombre": "gorra deportiva negra",
            "marca": "Americanino",
            "TipoPrenda": "gorra",
            "Precio":60000,
            "Sexo":"Masculino",
            "imagenUrl":"/src/assets/img/prendas_americanino/gorra_deportiva_negra_americanino.jpg"
        },
        {
            "id":15,
            "nombre": "gorra negra",
            "marca": "Americanino",
            "TipoPrenda": "gorra",
            "Precio":50000,
            "Sexo":"Masculino",
            "imagenUrl":"/src/assets/img/prendas_americanino/gorra_negra_americanino.jpg"
        
        },
        {   
            "id":15,
            "nombre": "gorra rosa",
            "marca": "Americanino",
            "TipoPrenda": "gorra",
            "Precio":40000,
            "Sexo":"Masculino",
            "imagenUrl":"/src/assets/img/prendas_americanino/gorra_rosa_americanio.jpg"
        },
        {
            "id":16,
            "nombre": "medias azules",
            "marca": "Americanino",
            "TipoPrenda": "medias",
            "Precio":20000,
            "Sexo":"Masculino",
            "imagenUrl":"/src/assets/img/prendas_americanino/medias_azules_americanino.jpg"
        },
        {
            "id":17,
            "nombre": "medias rosas",
            "marca": "Americanino",
            "TipoPrenda": "medias",
            "Precio":10000,
            "Sexo":"Femenino",
            "imagenUrl":"/src/assets/img/prendas_americanino/medias_rosa_americanino.jpg"
        },
        {
            "id":18,
            "nombre": "medias vanilla",
            "marca": "Americanino",
            "TipoPrenda": "medias",
            "Precio":20000,
            "Sexo":"Femenino",
            "imagenUrl":"/src/assets/img/prendas_americanino/medias_vainilla_americanino.jpg"
        },
        {
            "id":19,
            "nombre": "medias vino tinto",
            "marca": "Americanino",
            "TipoPrenda": "medias",
            "Precio":20000,
            "Sexo":"Femenino",
            "imagenUrl":"/src/assets/img/prendas_americanino/medias_vinotinto_americanino.jpg"
        },
        {
            "id":20,
            "nombre": "medias tobilleras vino tinto",
            "marca": "Americanino",
            "TipoPrenda": "medias",
            "Precio":10000,
            "Sexo":"Masculino",
            "imagenUrl":"/src/assets/img/prendas_americanino/tobillera_vinotinto_americanino.jpg"
        } 
        ])  

        const addToCart = (product) => {
            setCart([...cart, product]);
          };


          const removeFromCart = (productToRemove) => {
            setCart(cart.filter(item => item.id !== productToRemove.id));
          };

          return (
            <CartContext.Provider value={{ cart, products, addToCart, removeFromCart }}>
              {children}
            </CartContext.Provider>
          );

}
export default ShpingCartReducers