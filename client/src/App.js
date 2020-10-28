import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// styles
import Radium, { StyleRoot } from "radium";
import appStyle from "./appStyle";

// components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Routes
import Routes from "./routes";

const App = () => {
  return (
    <StyleRoot>
      <div style={appStyle.stickyFooter.container}>
        <Router>
          <Header />
          {/* push content under header */}
          <div style={{ marginTop: "2.5rem" }} />
          <div style={appStyle.stickyFooter.maincontent}>
            <Routes />
          </div>
          <Footer />
        </Router>
      </div>
    </StyleRoot>
  );
};

export default Radium(App);
