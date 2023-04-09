import { useEffect, useState } from "react";

import dataMenu from '../mockdata/MenuData';

const useMenuRestaurant = () =>{
    
    const data = getData();
    const productosNav = data.map(menu => ({ id: menu.id, title: menu.title}));
    const productosMenu = data.map(menu=>menu.productos.map(i=>({...i,link_id:`${menu.id}`})))
    .reduce((a, b) => a.concat(b));

    //const [ product, setProduct ] = useState(null)
    const productosObject = {};
    productosMenu.forEach(e=>{ productosObject[e.id] = e });

    const getProduct = (productId)=>{
        return productosObject[productId];
    }

    return [productosNav,productosMenu,data,getProduct];
}

const getData = () => {
    return dataMenu;
}

export { useMenuRestaurant };