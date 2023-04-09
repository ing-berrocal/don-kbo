import React, { useContext } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { RestaurantContex } from "../../helper/context/RestaurantContext";

const ItemsContainer = ({ producto }) => {
    
    const n = useNavigate();
    const { cartItems, fnAddToCart} = useContext(RestaurantContex);

    const fnRedirect = (product)=>{
        fnAddToCart(product);
        //return n('/restaurant/add/123');
    }

    return (
        <div className="col-xs-12 col-md-6 p-2">

            <div className="row border border-2">
                <div className="col-4">
                    <img src={producto.url} className="card-img-top" alt="..." />
                </div>
                <div className="col-8">

                    <div className="vstack gap-1">
                        <div className="p-0"><h6>{producto.title}</h6></div>
                        <div className="text-wrap">{producto.description}</div>
                        <div className="p-0">
                            <div className="clearfix">
                                {/*<button type="button" className="btn"
                                onClick={()=>fnRedirect(producto)}>Add</button>*/}
                                <Link to={`add/${producto.id}`}>Agregar</Link>
                                <button type="button" className="btn float-end"
                                >$ {producto.value}</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/*<img src="" className="mp-0 img-fluid rounded-start" alt="..." />*/}
        </div>
    );
}

export { ItemsContainer };