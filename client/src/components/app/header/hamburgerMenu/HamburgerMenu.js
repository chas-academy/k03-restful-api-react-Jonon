import React, { Component } from "react";
import Radium from "radium";
import colors from "../../styles/colors";

class HamburgerMenu extends Component {
  render() {
    return (
      <div>
        <ion-icon style={[colors.color.secondary, {cursor: "pointer"}]} size="large" name="menu" />
      </div>
    );
  }
}

export default Radium(HamburgerMenu);
