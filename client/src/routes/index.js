import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import ProductsList from "../pages/products/productList/ProductList";
import Product from "../pages/products/product/Product";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/products/" component={ProductsList} exact />
      <Route path="/products/:category" component={ProductsList} exact />
      <Route
        path="/products/:category/:subcategory"
        component={ProductsList}
        exact
      />
      <Route path="/products/:category/:subcategory/:id" component={Product} />
      <Route render={() => <Route component={Error} />} />
    </Switch>
  );
}

export default Routes;
