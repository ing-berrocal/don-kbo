import React, { useState, useContext, useId } from "react";
import { RestaurantContex } from "../../../helper/context/RestaurantContext";
import { useNavigate } from "react-router-dom";

function LogionPageUI() {

    const { setAutenticateUser } = useContext(RestaurantContex);

    const URL_LOGIN = 'http://localhost:8080/public/login';
    
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch(URL_LOGIN,{
            method: 'POST',
            body: formData,
            mode:'cors'
        }).then(e=>e.json())
        .then((respuesta)=>{
            setAutenticateUser(respuesta.data);
            navigate('/')
        })

        return false;
    }

    const onChangeEvent = ({ target }) => {

        const { name, value } = target;
        console.log(name, value);
        const cop = { ...userData };
        cop[name] = value;
        setUserData(cop)
        //console.log(target.name)
    }

    const idEmail = useId();
    const idPassowrd = useId();

    return (
        <div className="row">
            <div className="col-5">
                <h1>Login</h1>
                <form method="POST" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor={idEmail} className="form-label">Email address</label>
                        <input id={idEmail} type="email" className="form-control"
                            name="email"
                            value={userData.username}
                            onChange={onChangeEvent} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label htmlFor={idPassowrd}>Passowrd</label>
                        <input id={idPassowrd} type="password" className="form-control"
                            name="password"
                            value={userData.password}
                            onChange={onChangeEvent} />
                    </div>
                    <button className="form-check-label" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export { LogionPageUI }