import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { getText } from '../../labels'
import { RestaurantContex } from "../../../helper/context/RestaurantContext";

const NavUI = () => {

  const {user} = useContext(RestaurantContex);

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{ getText('nav_titulo') }</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to={'/'}>{ import.meta.env.REACT_APP_MENU_TITULO }</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/ubicacion'}>{ getText('nav_restaurantes') }</NavLink>
              </li>
            </ul>
            <div class="dropdown">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {user.email}
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Perfil</a></li>
                <li><a class="dropdown-item" href="#">Salir</a></li>    
              </ul>
              </div>            
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export { NavUI };