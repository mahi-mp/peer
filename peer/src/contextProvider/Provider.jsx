import React,{ createContext, useState } from "react";

export const AppContext=createContext();


const themes = {
    dark: {
        color: '#cecece',
        background: "#000000"
    },
    light: {
        color: '#000000',
        background: "#cecece"
    }
}
function Provider(props){
    const [isAuth,setAuth]=useState(false);
    const [themeName, setThemeName] = useState('dark')

    const toggle = () => {
        setAuth(!isAuth)
    }

    const toggleTheme = () => {
        if(themeName==='light'){
            setThemeName('dark')
        }
        else{
            setThemeName('light')
        }
    }

    return(
        <AppContext.Provider value={{isAuth,setAuth,toggle, themes, themeName ,toggleTheme}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Provider;
