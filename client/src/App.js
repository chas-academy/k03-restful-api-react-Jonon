import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Home from "./pages/Home";
import Header from "./components/Header";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
