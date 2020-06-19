import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Login from "./login/login";
import Product from "./product/product";

function App() {
  return (
      <div>
         <Navbar />
        <Switch>
          <Route path="/" exact render={() =>   <Login />} />
          <Route path="/profile" exact render={() =>   <Product />} />
        </Switch>
      </div>
  );
}

export default App;
