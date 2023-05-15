import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { getText } from '../../labels'
import { LoginComponentUI } from "../Login";

const NavUI = () => {

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{getText('nav_titulo')}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to={'/'}>{import.meta.env.REACT_APP_MENU_TITULO}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/ubicacion'}>{getText('nav_restaurantes')}</NavLink>
              </li>
              <li class="nav-item dropdown">
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
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Administrador
      </a>
      <ul class="dropdown-menu">
        <li>
          <NavLink className="dropdown-item" to={'/admin/productos'}>Gestión de productos</NavLink>
        </li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </>
  );
}

export { NavUI };