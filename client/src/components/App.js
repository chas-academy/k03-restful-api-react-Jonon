import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// styles
import Radium, { StyleRoot } from "radium";
import appStyle from "./appStyle";

// components
import Home from "./pages/home/Home";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Error from "./pages/error/Error";
import ProductsList from "./pages/products/productList/ProductList";
import Product from "./pages/products/product/Product";

const App = () => {
  return (
    <StyleRoot>
      <div style={appStyle.stickyFooter.container}>
        <Router>
          <Header />
          {/* push content under header */}
          <div style={{ marginTop: "2.5rem" }} />
          <div style={appStyle.stickyFooter.maincontent}>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/products/" component={ProductsList} exact />
              <Route
                path="/products/:category/:subcategory"
                component={ProductsList}
                exact
              />
              <Route
                path="/products/:category/:subcategory/:id"
                component={Product}
              />
              <Route render={() => <Route component={Error} />} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </StyleRoot>
  );
};

export default Radium(App);
