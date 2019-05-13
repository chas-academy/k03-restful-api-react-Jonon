import React, { Component } from "react";
import { typicons } from "typicons.font";

import Radium from "radium";
import iconStyle from "./iconsStyle";

class Icon extends Component {
  render() {
    return <span style={iconStyle.default} className={this.props.icon} />;
  }
}

export default Radium(Icon);
