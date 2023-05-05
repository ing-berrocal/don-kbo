import React from "react";

import './MenuContainer.css';

import {ItemsContainer} from '../Menu/ItemsContainer';
import { useLoaderData } from "react-router-dom";

const MenuContainer = ({Categorias,productos}) => {

    return (
        <React.Fragment>
            <div className="row navMenuScrollHide shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <div id="menuNavId" className="nav d-flex flex-row list-group" data-bs-smooth-scroll="true" data-bs-offset="0" tabIndex="0" style={{width:'max-content'}}>
                    {
                        Categorias.map(categoria=><a className="nav-item nav-link" key={categoria.id} aria-current="page" href={`#menu-item-${categoria.id}`}>{categoria.title}</a>)
                    }
                </div>
            </div>
            <div className='row gy-2' data-bs-spy="scroll"   data-bs-target="#menuNavId">
                {
                    Categorias.map(categoria=>
                        (<React.Fragment key={`agrupacion-${categoria.id}`}>
                            <div key={`menu-${categoria.id}`} className="col-xs-12 col-md-12 p-2 boder-button-separador">
                                <h4 id={`menu-item-${categoria.id}`}>{categoria.title}</h4>
                            </div>
                            {productos.filter(producto=>categoria.id === producto.categoria).map(p=>(<ItemsContainer key={`${categoria.id}-${p.codigo}`} producto={p} />))}
                        </React.Fragment>)
                    )
                                
                }
            </div>
            <div className="row justify-content-end">
                    <div className="col-2">
                    <button type="button" className="btn btn-primary position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span className="visually-hidden">unread messages</span></span>
                    </button>
                    </div>               
                </div>
        </React.Fragment>);
}

export { MenuContainer }