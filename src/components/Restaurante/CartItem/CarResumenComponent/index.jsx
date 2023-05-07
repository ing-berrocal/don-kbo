
import { useContext, useRef, useEffect } from "react";

import { RestaurantContex } from '../../../../helper/context/RestaurantContext';

import { Tooltip } from 'bootstrap';
import { Link } from "react-router-dom";

const BottonUIContainer = ({ categorias, productos }) => {

    const {cartItems} = useContext(RestaurantContex);

    const tooltipRef = useRef();  

    useEffect(() => {
        var tooltip = new Tooltip(tooltipRef.current, {
            title: `$ ${cartItems.valorTotal}`,
            placement: 'right',
            trigger: 'hover'
        });
        return(()=>tooltip.hide())
    })

    console.log(cartItems)
    return (
        <div className="row justify-content-end">
            <div className="col-2">
                <Link className="btn btn-primary position-relative" ref={tooltipRef}                    
                    to={'car'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span className="visually-hidden">unread messages</span></span>
                </Link>
            </div>
        </div>
    );
}

export {BottonUIContainer};