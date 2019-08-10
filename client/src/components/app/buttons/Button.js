import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import styles from "./style";

class Button extends React.Component {
  static propTypes = {
    kind: PropTypes.oneOf(["primary", "secondary"]).isRequired
  };

  render() {
    return (
      <button
        type={this.props.type}
        onClick={() => this.props.onClick()}
        style={[
          styles.base,
          styles[this.props.kind],
          styles.size[this.props.size],
          {
            width: this.props.width,
            fontFamily: this.props.fontFamily,
            marginTop: this.props.marginTop
          }
        ]}
      >
        {this.props.title}
      </button>
    );
  }
}

export default Radium(Button);
