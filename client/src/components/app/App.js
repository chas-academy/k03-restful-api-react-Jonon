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
import Modal from "./modal/modal";
import Products from "./pages/products/Products";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  showModal = () => {
    this.setState({
      showModal: true
    });
  };

  // hide modal if click outside
  componentWillMount() {
    document.addEventListener("click", this.handleClick, false);
  }

  componentWillUnmount() {
    document.addEventListener("click", this.handleClick, false);
  }

  handleClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.setState({ showModal: false });
  };

  render() {
    return (
      <StyleRoot>
        <div style={appStyle.stickyFooter.container}>
          <Router>
            <Header showModal={this.showModal.bind(this)} />
            <div style={appStyle.stickyFooter.maincontent}>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/products" component={Products} />
                <Route render={() => <Route component={Error} />} />
              </Switch>
            </div>
            <Footer />
          </Router>
        </div>
        <Modal
          show={this.state.showModal}
          outside={node => (this.node = node)}
        />
      </StyleRoot>
    );
  }
}

export default Radium(App);
