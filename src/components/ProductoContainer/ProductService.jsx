import { useContext, useEffect, useState } from "react";
import { RestaurantContex } from "../../helper/context/RestaurantContext";

const ProductoService = ()=>{

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


    const { token } = useContext(RestaurantContex);

    const URL_PRODUCTOS = 'http://localhost:8080/admin/producto';
    const URL_ADMIN_PRODUCTO = 'http://localhost:8080/admin/producto';

    const localToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuY29tL2lzc3VlciIsInVwbiI6Impob25kb2VAcXVhcmt1cy5jb20iLCJncm91cHMiOlsiYWRtaW4iLCJ1c2VyIl0sImZ1bGxfbmFtZSI6IkRhbmllbCBBbnRvbmlvIEJlcnJvY2FsIiwiYmlydGhkYXRlIjoiMjAwMS0wNy0xMyIsImlhdCI6MTY4NDA4MzA2MSwiZXhwIjoxNjg0NDI4NjYxLCJqdGkiOiJlNmQwYTdiYy1lY2JmLTRkMjktOTI5My01MzZiNDgzNDhkMGEifQ.sMwiLLccvD1ybZYtXnKvtUO2G4r9umLobA3eWE-YVD7PInT222JUdqOdh7V5gWzPpC-aSKLKPZMN6NcOiQaG0JItgpygP7-MaShKStsF18e2BiFFKZJaR7672TQjfhF3JpiJ1pTWUW7WTIyHNPK374_wNPT85Kq4QHBXiZJISqKrJmEBiScWLbUdthQteDTg8Zy2zWqTXRnw8NGh0GSBANytdGX9e8TO_R4ARHDdMAv2YVNkKb9s2JVORzHVPuLSIhTMidTPGUwaISZSDdZRZybBZ7ooWgm_huktEEUbI8SZRuRMYe29M8gYGUWlMFmQ-tZc8dP3v0Xe3lAiz43i0g';

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