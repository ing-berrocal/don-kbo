import React from "react";
import { Outlet, Routes, Route } from 'react-router-dom';
import './index.css';

import { NavUI } from "../site/NavBar";
import { MenuUIContainer } from './Menu';
import { useMenuRestaurant } from '../../helper/customHook/useMenuRestaurant';
import { useLoaderData } from "react-router-dom";

const RestaurantUIContainer = () => {
    return (<>
            <NavUI />
            <div className='container'>
                <Outlet />
            </div>
        </>);
}

export { RestaurantUIContainer }