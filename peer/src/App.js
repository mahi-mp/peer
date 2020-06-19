import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Login from "./login/login";
import Product from "./product/product";
import Provider from "./contextProvider/Provider";

function App() {
  return (
      <Provider>
         <Navbar />
        <Switch>
          <Route path="/" exact render={(props) =>   <Login {...props} />} />
          <Route path="/product" exact render={() =>   <Product />} />
        </Switch>
      </Provider>
  );
}

export default App;
