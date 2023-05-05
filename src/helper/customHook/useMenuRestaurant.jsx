import { useEffect, useState } from "react";

import dataMenu from '../mockdata/MenuData';

const useMenuRestaurant = () =>{
    
    const dataMock = getData();

    const categoriaProductos = [
        {
            "codigo": "prom",
            "nombre": "Promociones"
        },
        {
            "codigo": "prod",
            "nombre": "Cubanos"
        },
        {
            "codigo": "bebd",
            "nombre": "Bebidas"
        }
    ].map(menu => ({ id: menu.codigo, title: menu.nombre}));



    const productos = categoriaProductos.map(categoria =>dataMock[categoria.id])
    .reduce((a, b) => a.concat(b))

    console.log(productos)
    
    /*dataMock.map(menu=>menu.productos.map(i=>({...i,link_id:`${menu.id}`})))
    .reduce((a, b) => a.concat(b));
    */
    //const [ product, setProduct ] = useState(null)
    //const productosObject = {};
    //productosMenu.forEach(e=>{ productosObject[e.id] = e });

    const getProduct = (productId)=>{
        return []//productosObject[productId];
    }

    return [categoriaProductos,productos,getProduct];
}

const getData = () => {
    return dataMenu;
}

export { useMenuRestaurant };