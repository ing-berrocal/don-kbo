import { useContext, useEffect, useState } from "react";
import { RestaurantContex } from "../../helper/context/RestaurantContext";

const ProductoService = ()=>{

    const categoriaProductos = [
       
        {
            "codigo": "prod",
            "nombre": "Cubanos"
        },
        {
            "codigo": "bebd",
            "nombre": "Bebidas"
        },
        {
            "codigo": "prom",
            "nombre": "Promociones"
        }
    ].map(menu => ({ id: menu.codigo, title: menu.nombre}));


    const { token } = useContext(RestaurantContex);

    const URL_PRODUCTOS = 'http://localhost:8080/admin/producto';
    const URL_ADMIN_PRODUCTO = 'http://localhost:8080/admin/producto';

    const localToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuY29tL2lzc3VlciIsInVwbiI6Impob25kb2VAcXVhcmt1cy5jb20iLCJncm91cHMiOlsiYWRtaW4iLCJ1c2VyIl0sImZ1bGxfbmFtZSI6IkRhbmllbCBBbnRvbmlvIEJlcnJvY2FsIiwiYmlydGhkYXRlIjoiMjAwMS0wNy0xMyIsImlhdCI6MTY4NDY4OTY1MSwiZXhwIjoxNjg1MDM1MjUxLCJqdGkiOiJlZTVhYjhiMS1iYmI0LTRiM2QtOTRmNi03YWYwMTc3ZWIyMGUifQ.BzR0GxbBuOcjKNMU1kZB4we9SKdbmtRfyXsrpnbgaXJKQrNTxSxPNcdeM9kAw6OQTRUIsEjYI4xIHq58chycw7_rnW_1OMlCyhUx1Xdrmzvj5Stxa91KuDLjt2abvx6bo7EQ4Cq9vnvGu7-xOVUDTLUE-hbzRmEhz21SWxFN1GvdDLY1VFp6iTaVuWeMxv99ebIsosEQXTNK8NQSTEJT_e00V_zpf4y3ncR-dxukAEbAzMOj-WSYwQMtC5JknKaj8hb9gRyJNKU31qaDBrbN0S1g3G71ahng_3miL9L4g67OsnAy6r21URRsZJg6dJ0M9QlV_MnuQi073jSlQ5cGqQ';

        const myHeaders = new Headers({
            "Authorization": `Bearer ${localToken}`,
            //'Access-Control-Allow-Origin': '*',
            //'Access-Control-Allow-Headers': '*',
            //'Accept':'*/*',
            //'Origin':'http://localhost:8000'
            "Content-Type": "application/json"
          });

    const getProducts = ()=>{
        return fetch(URL_PRODUCTOS,{
            method: 'GET',
            headers: myHeaders
        }).then(respuesta=>
            respuesta.json()
        ).then(respuesta=>
            respuesta.data
        );
        
    }

    const getProduct = (id)=>{
        return fetch(`${URL_PRODUCTOS}/by-id/${id}`,{
            method: 'GET',
            headers: myHeaders
        }).then(respuesta=>
            respuesta.json()
        ).then(respuesta=>
            respuesta.data
        );
        
    }

    const updateProduct = (method,data)=>{
        return fetch(URL_PRODUCTOS,{
            method: method,
            body: data,
            headers: myHeaders
        }).then(e=>e.json())
        .then((respuesta)=>{
            console.log(respuesta)
        },error=>{
            console.log('--------------');
            console.log(error);
            console.log('--------------');
        })

    }

    /*useEffect(()=>{
        getProducts();
    },[])*/

    return [
        getProducts, categoriaProductos, updateProduct, getProduct
    ];
}

export {ProductoService};