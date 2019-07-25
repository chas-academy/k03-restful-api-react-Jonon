import React, { Component } from "react";
import buttonStyle from "./buttonStyle";
import Radium from "radium";

class Button extends Component {
  render() {
    console.log(this.props.color);
    return (
      <button
        style={[
          buttonStyle.base,
          this.props.activeButton,
          this.props.btnInactive
        ]}
      >
        {this.props.title}
      </button>
    );
  }
}

export default Radium(Button);
