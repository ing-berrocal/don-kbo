import React, { useState } from "react";

function LogoutPageUI(){    

    const onFnLogout = (e)=>{                
        e.preventDefault();
    }

    return (
        <>
            <h1>Login</h1>
            <form>       
                Salir         
                <button type="submit">Logout</button>
            </form>
        </>
    );
}

export { LogionPageUI }