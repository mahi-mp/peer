import React, { useState, useEffect, useContext } from 'react';
import {AppContext} from '../contextProvider/Provider'
import {useHistory} from 'react-router-dom'

function Product(){
    const [ data, setData ] = useState([])

    const { isAuth, setAuth } = useContext(AppContext)
    const history = useHistory();

    useEffect( ()=>{
        fetch(" https://api.punkapi.com/v2/beers")
        .then((response)=>response.json())
        .then((response)=>{
            setData(response)
        })
    }, [ ] )

    if(!isAuth){
        history.push('/')
    }

    return(
        <div className="container">
            <div className="d-flex justify-content-center">
                <h5 className="card-title">Beer List</h5>
            </div>
            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((ele,index)=>{
                            return(
                                <tr key={index}>
                                    <th scope="row">{ele.id}</th>
                                    <td>{ele.name}</td>
                                    <td><img src={ele.image_url} width='100' height='100' alt={ele.name}/></td>
                                    <td>{ele.description}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Product;