import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//styles
import appStyle from "./appStyle";

// components
import Home from "../../pages/Home";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Error from "../../pages/Error";

function App() {
  return (
    <div style={appStyle.stickyFooter.container}>
      <Router>
        <Header />
        <div style={appStyle.stickyFooter.maincontent}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route component={Error} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
