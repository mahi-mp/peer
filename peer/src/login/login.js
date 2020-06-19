import React, { Component } from 'react';

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            status:false,
            email:'',
            password:''
        }
    }

    changeStatus=()=>{
        let url="https://reqres.in/api/login";
        var user = {
            email : this.state.email,
            password : this.state.password
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
            console.log(response)
        })
    }

    render(){
        return(
            <div className="container my-5 d-flex justify-content-center">
                <div className="w-50" action="">
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" onChange={(e)=>{this.setState({email:e.target.value})}} id="inputEmail3" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" onChange={(e)=>{this.setState({password:e.target.value})}} id="inputPassword3" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10 d-flex justify-content-center">
                            <button onClick={()=>this.changeStatus()} className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;