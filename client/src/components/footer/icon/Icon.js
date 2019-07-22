import React, { Component } from "react";
import { typicons } from "typicons.font";

import Radium from "radium";
import iconStyle from "./iconsStyle";

class Icon extends Component {
  render() {
    return (
      <div style={iconStyle}>
        <span className={this.props.icon} style={iconStyle.align} />
      </div>
    );
  }
}

export default Radium(Icon);
