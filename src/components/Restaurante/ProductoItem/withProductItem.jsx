import React, { useContext } from "react";
import { Link } from "react-router-dom";


import './index.css';

import { getURLProductoImagen } from '../../labels';

const withProductoUIItem = (props) => {
    return (props) => {

        const producto = props.producto;
        const children = props.children;

        return (
            <div className="col-xs-11 col-md-5 offset-md-1">
                <div className="card" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={getURLProductoImagen(producto.urlImagen)} className="img-fluid rounded-start" alt="Imagen de producto" />
                        </div>
                        <div className="col-md-8">
                            {children}
                        </div>
                    </div>
                </div>

                {/*<img src="" className="mp-0 img-fluid rounded-start" alt="..." />*/}
            </div>
        );
    }
}

const ProductUIContainer = ({ producto }) => {

    return (
        <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">{producto.descripcion}.</p>
            <Link to={`/add/${producto.id}`} relative="path">$ {producto.valor}</Link>
            <a className="btn  btn-outline-primary" href={`restauran/add/${producto.id}`}>$ {producto.valor}</a>
            <p className="card-text"></p>
        </div>
    );
}

const ProductoCartUIContainer = ({ producto }) => {
    const [numItems, setNumItems] = useState(0);
    return (
        items.map(e => (
            <>
                <div className="row">
                    <div className="col-10">
                        {e.title}
                    </div>
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <button type="button" className="btn btn-outline-secondary">-1</button>
                            <input type="text" className="form-control" aria-label="0" value={numItems} />
                            <button type="button" className="btn btn-outline-secondary">+1</button>
                        </div>
                    </div>
                </div>
            </>
        )));
}

export { ProductUIContainer };