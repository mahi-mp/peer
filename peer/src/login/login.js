import React, { useContext, useState } from 'react';
import { AppContext } from '../contextProvider/Provider';
import { useHistory } from "react-router-dom";


function  Login (){
    const { isAuth, setAuth, themes, themeName} =useContext(AppContext)
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const history = useHistory()

    const changeStatus=()=>{
        var user = {
            email : email,
            password : password
        }
        let options={
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }

        fetch("https://reqres.in/api/login",options)
        .then((response)=>response.json())
        .then((response)=>{
            if(response.token==="QpwL5tke4Pnpja7X4"){
                setAuth(true)
            }
        })
    }

    if(isAuth){
        history.push('/product')
    }
    return(
        <div className="container my-5 d-flex justify-content-center">
            <div className="w-50" action="">
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)} }id="inputEmail3" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="inputPassword3" />
                    </div>
                </div>
                <div className="form-group row">
                    <div style={themes[themeName]} className="col-sm-10 d-flex justify-content-center">
                        <button onClick={()=>changeStatus()} className="btn btn-primary">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;