import React, { Component } from "react";
import { typicons } from "typicons.font";
import Radium from "radium";

import styles from "../../../styles/styles";

class SocialIcon extends Component {
  render() {
    return <span style={styles.SocialIcon} className={this.props.icon} />;
  }
}

export default Radium(SocialIcon);
