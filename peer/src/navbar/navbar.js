import React,{useContext} from 'react';
import {AppContext} from "../contextProvider/Provider"

function Navbar(){
    const {setAuth, themes, themeName, toggleTheme} = useContext(AppContext)
    console.log(themes[themeName])
    return(
        <nav style={themes[themeName]} className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
            </ul>
                <button onClick={()=>setAuth(false)} className="btn btn-outline-warning my-2 my-sm-0" type="submit">Logout</button>
            <button onClick={()=>toggleTheme()} className="btn btn-outline-warning my-2 my-sm-0" type="submit">{themeName==="light"?"DARK":"LIGHT"}</button>
            </div>
        </nav>
    )
}

export default Navbar;