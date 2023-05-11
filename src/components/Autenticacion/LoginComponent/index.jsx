import React, { useState } from "react";

function LogionPageUI(){

    const [userData,setUserData] = useState({
        username:'',
        password:''});

    const onChangeEvent = ({target})=>{
        
        const { name, value } = target;
        console.log(name,value);
        const cop = {...userData};
        cop[name] = value;
        setUserData(cop)
        //console.log(target.name)
    }

    return (
        <>
            <h1>Login</h1>
            <form>
                <label>Username</label>
                <input type="text"
                name="username"
                value={userData.username}
                onChange={onChangeEvent}/>
                <label>Passowrd</label>
                <input type="password"
                name="password" 
                value={userData.password}
                onChange={onChangeEvent}/>
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export { LogionPageUI }