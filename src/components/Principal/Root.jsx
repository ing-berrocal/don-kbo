import { Nav } from './Nav';
import { Outlet, Routes, Route } from 'react-router-dom';

import { RestaurantProvider } from '../../helper/context/RestaurantProvider'; 

const Root = ()=>{
    return (
        <RestaurantProvider>
            <Nav />
            <div className='container'>
                <Outlet />
            </div>
        </RestaurantProvider>
    );
}

export default Root;