import React from "react";

import './index.css';

import { ProductUIContainer } from '../ProductoItem';
import { useLoaderData } from "react-router-dom";

const CartItemUIContainer = ({carItems}) => {

    console.log(carItems)

    return (
        <React.Fragment>
            {carItems}
        </React.Fragment>);
}

export { CartItemUIContainer }