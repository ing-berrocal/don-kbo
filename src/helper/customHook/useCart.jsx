import { useEffect, useState } from "react";


const useCart = () =>{
    
    /*{
        id: 'p-c01',
        title: 'Cubanito Jamón y Queso',
        description: 'pan, butifarra, papa ripio, queso',
        url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
        value: 1000.0
    }*/
    const [ cartItems, setCartItems ] = useState({
        usuario:{},
        productos:[],
        valorTotal:0.0,
        isPending:true});

    const fnAddToCart = (product) =>{
        const {id,total} = product;        
        const tmp = cartItems.productos;
        tmp.push(product);

        setCartItems({productos:tmp,valorTotal:(cartItems.valorTotal + total),isPending:true});
        
    };

    const fnReset = ()=>{
        setCartItems({
            usuario:{},
            productos:[],
            valorTotal:0.0,
            isPending:true})
    }

    return [cartItems, fnAddToCart, fnReset];
}

export { useCart };