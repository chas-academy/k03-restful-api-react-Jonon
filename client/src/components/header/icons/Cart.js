import React, { Component } from "react";
import { typicons } from "typicons.font";

// styles
import Radium from "radium";
import styles from "../../../styles/styles";

class Cart extends Component {
  render() {
    return <span style={styles.icon} className="typcn typcn-shopping-cart" />;
  }
}

export default Radium(Cart);
