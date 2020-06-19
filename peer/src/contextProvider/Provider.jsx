import React,{ createContext, useState } from "react";

export const AppContext=createContext();

function Provider(props){
    const [isAuth,setAuth]=useState(false);
    return(
        <AppContext.Provider value={{isAuth,setAuth}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Provider;
