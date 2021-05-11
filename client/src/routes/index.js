import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// components
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Product from "../pages/products/product/Product";
import Products from "../pages/products/Products";
import Account from "../pages/account/Account";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route exact path="/products/" component={Products}>
        <Redirect to="/products/all/" />
      </Route>
      <Route exact path="/products/:category" component={Products} />
      <Route exact path="/products/:category/:subcategory" component={Products} />
      <Route path="/products/:category/:subcategory/:id" component={Product} />
      <Route path="/account" component={Account} />
      <Route render={() => <Route component={Error} />} />
    </Switch>
  );
}

export default Routes;
