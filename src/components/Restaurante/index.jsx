import React from "react";
import { Outlet } from 'react-router-dom';


import { NavUI } from "../site/NavBar";

const RestaurantUIContainer = () => {
    return (<>
            <NavUI />
            <div className='container'>
                <Outlet />
            </div>
        </>);
}

export { RestaurantUIContainer }