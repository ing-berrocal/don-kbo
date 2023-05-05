import React, { useContext } from "react";

import './ItemsContainer.css';

import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { RestaurantContex } from "../../helper/context/RestaurantContext";
import { getURLProductoImagen } from '../labels';

const ItemsContainer = ({ producto }) => {


    const n = useNavigate();
    const { cartItems, fnAddToCart } = useContext(RestaurantContex);

    const fnRedirect = (product) => {
        fnAddToCart(product);
        //return n('/restaurant/add/123');
    }

    return (
        <div className="col-xs-11 col-md-5 offset-md-1">
            <div class="card" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={getURLProductoImagen(producto.urlImagen)} className="img-fluid rounded-start" alt="Imagen de producto" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{producto.nombre}</h5>
                            <p class="card-text">{producto.descripcion}.</p>
                            <p class="card-text">$ {producto.valor}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*<img src="" className="mp-0 img-fluid rounded-start" alt="..." />*/}
        </div>
    );
}

export { ItemsContainer };