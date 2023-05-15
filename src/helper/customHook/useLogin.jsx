import { useState } from "react"

const useLogin = () =>{

    let roles = [];
    const [usuario,setUsuario] = useState({});
    const [token, setToken] = useState(null);

    const estaAutenticado = ()=>{
        return token !== null;
    }

    const setAutenticateUser = (login)=>{

        console.log(login);

        setUsuario(login.usuario)
        setToken(login.token);

    }

    const logout = ()=>{
        setUsuario({})
        setToken(null);
    }

    return [ usuario, roles, token, estaAutenticado, setAutenticateUser, logout ]
}

export { useLogin };