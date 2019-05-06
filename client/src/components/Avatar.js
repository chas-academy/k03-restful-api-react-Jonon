import React, { Component } from "react";
import { typicons } from "typicons.font";

// styles
import Radium from "radium";
import styles from "../styles/styles";
import colors from "../styles/colors";

class Avatar extends Component {
  render() {
    return <span style={styles.icon} className="typcn typcn-user" />;
  }
}

export default Radium(Avatar);
