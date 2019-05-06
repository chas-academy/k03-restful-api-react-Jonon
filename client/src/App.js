import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./pages/Error";

// sticky footer
const container = {
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column"
};

const maincontent = {
  flex: "1"
};

function App() {
  return (
    <div style={container}>
      <Router>
        <Header />
        <div style={maincontent}>
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
