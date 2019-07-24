import React, { Component } from "react";
import { typicons } from "typicons.font";

// styles
import Radium from "radium";
import colors from "../../styles/colors";
import iconStyle from "./iconsStyle";

class Icon extends Component {
  render() {
    return (
      <span
        style={[iconStyle, colors.color.primary]}
        className={this.props.icon}
      />
    );
  }
}

export default Radium(Icon);
