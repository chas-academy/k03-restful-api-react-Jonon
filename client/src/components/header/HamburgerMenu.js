import React, { Component } from "react";
import Radium from "radium";
import colors from "../../styles/colors";

class HamburgerMenu extends Component {
  render() {
    return <ion-icon style={colors.color.secondary} size="large" name="menu" />;
  }
}

export default Radium(HamburgerMenu);
