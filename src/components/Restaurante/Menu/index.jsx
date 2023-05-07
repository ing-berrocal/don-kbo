import React from "react";

import './index.css';

import { ProductUIContainer } from '../ProductoItem';
import { BottonUIContainer } from '../CartItem/CarResumenComponent';
import { useLoaderData } from "react-router-dom";

const MenuUIContainer = ({categorias,productos}) => {

    return (
        <React.Fragment>
            <div className="row navMenuScrollHide shadow-none p-3 mb-5 rounded">
                <div id="menuNavId" className="nav d-flex flex-row list-group" data-bs-smooth-scroll="true" data-bs-offset="0" tabIndex="0" style={{width:'max-content'}}>
                    {
                        categorias.map(categoria=><a className="nav-item nav-link" rel="Section" key={categoria.id} aria-current="page" href={`#menu-item-${categoria.id}`}>{categoria.title}</a>)
                    }
                </div>
            </div>
            <div className='row gy-2' data-bs-target="#menuNavId" >
                {
                    categorias.map(categoria=>
                        (<React.Fragment key={`agrupacion-${categoria.id}`}>
                            <div id={`menu-item-${categoria.id}`} key={`menu-item-${categoria.id}`} className="col-xs-12 col-md-12 p-2 boder-button-separador">
                                <h4 id={`menu-e-item-${categoria.id}`}>{categoria.title}</h4>
                            </div>
                            {productos.filter(producto=>categoria.id === producto.categoria).map(p=>(<ProductUIContainer key={`${categoria.id}-${p.codigo}`} producto={p} />))}
                        </React.Fragment>)
                    )
                                
                }
            </div>
            <BottonUIContainer/>
        </React.Fragment>);
}

export { MenuUIContainer }