import React, { Component } from "react";
import "typicons.font";

// styles
import Radium from "radium";
import colors from "../styles/colors";
import iconStyle from "./iconsStyle";

class Icon extends Component {
  render() {
    return (
      <span
        style={[iconStyle, colors.color[this.props.color]]}
        className={this.props.icon}
      />
    );
  }
}

export default Radium(Icon);
