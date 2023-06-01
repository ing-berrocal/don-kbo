import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { getText } from '../../labels'
import { LoginComponentUI } from "../Login";

const NavUI = () => {

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={'/'}>{getText('nav_titulo')}</NavLink>
  
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink className="nav-link" to={'/ubicacion'}>{getText('nav_restaurantes')}</NavLink>
              </li>
              <li className="nav-item dropdown">
                <MenuOptionsAdminUI/>
              </li>
            </ul>
            <LoginComponentUI />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

const MenuOptionsAdminUI = () => {
  return (
    <>
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Administrador
      </a>
      <ul className="dropdown-menu">
        <li>
          <NavLink className="dropdown-item" to={'/admin/productos'}>Gestión de productos</NavLink>
        </li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </>
  );
}

export { NavUI };