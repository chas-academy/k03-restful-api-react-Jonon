import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//styles
import appStyle from "./appStyle";
import Radium, { StyleRoot } from "radium";

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
            <div style={appStyle.stickyFooter.maincontent}>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route 
                path="/products/:category" 
                component={ProductsList} exact />
                <Route path="/products/:category/:subcategory" component={ProductsList} exact />
                 <Route path="/products/:category/:subcategory/:id" component={Product} />
                <Route render={() => <Route component={Error} />} />
              </Switch>
            </div>
            <Footer />
          </Router>
        </div>
      </StyleRoot>
    );
  }

export default Radium(App);
