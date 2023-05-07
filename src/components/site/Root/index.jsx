import { useState } from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import { NavUI } from '../NavBar';
import { RestaurantProvider } from '../../../helper/context/RestaurantProvider';

import { getRestaurantInfo } from '../../../helper/mockdata/RestaurantData';
import { getImageAndLink } from '../../../helper/googlemap/ImageMap';
import React from 'react';

const Root = () => {

    const [restaurantes, setRestaurantes] = useState([]);

    const restaurantesConsume = async () => {
        const object = await getRestaurantInfo();
        //const data = await object.json();
        return object.data;
    };

    restaurantesConsume().then(setRestaurantes);

    return (
        <>
            <div className="container py-4 px-3 mx-auto">
                <div className="row">
                    {
                        restaurantes.map(restaurante => {

                            const [map, link] = getImageAndLink(restaurante.point);
                            return (

                                <div key={restaurante.name} className="col">
                                    <div className="card mb-3">
                                        <img src={name} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Ubicacion: {restaurante.name}</h5>
                                            <p className="card-text">Dirección <a target={'_blank'} href={link}>{restaurante.address}</a></p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>)
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Root;