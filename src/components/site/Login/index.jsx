
import { useContext } from "react";
import { RestaurantContex } from "../../../helper/context/RestaurantContext";
import { useNavigate } from "react-router-dom";

const LoginComponentUI = ()=>{
    
    const {usuario, estaAutenticado, logout} = useContext(RestaurantContex);

    const auth = estaAutenticado();

    return (
        <>
        { auth && <UserButton user={usuario} logout={logout}/>}
        { !auth && <LoginButton />}
        </>
    );
}

const LoginButton = ()=>{
    const navigate = useNavigate();
    return (
        <button className="btn btn-primary" onClick={()=>navigate('/login')}>Login <i className="bi bi-file-person"></i></button>
    );
}

const UserButton = ({user, logout})=>{
    const navigate = useNavigate();
    return (
    <div className="dropdown">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {user.email}
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Perfil</a></li>
          <li><a className="dropdown-item" href="#" onClick={(e)=>{
                e.preventDefault();
                logout();
                navigate('/');
            }}>Salir</a></li>    
        </ul>
    </div>   
    );
}

export { LoginComponentUI }