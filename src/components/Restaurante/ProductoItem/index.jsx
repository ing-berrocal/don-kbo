import React, { useContext } from "react";
import { Link } from "react-router-dom";


import './index.css';

import { getURLProductoImagen } from '../../labels';

const ProductUIContainer = ({ producto }) => {

    return (
        <div className="col-xs-11 col-md-5 offset-md-1">
            <div className="card" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={getURLProductoImagen(producto.urlImagen)} className="img-fluid rounded-start" alt="Imagen de producto" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">{producto.descripcion}.</p>
                            <Link className="btn  btn-outline-primary" to={`add/${producto.id}`}>$ {producto.valor}</Link>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>

            {/*<img src="" className="mp-0 img-fluid rounded-start" alt="..." />*/}
        </div>
    );
}

export { ProductUIContainer };