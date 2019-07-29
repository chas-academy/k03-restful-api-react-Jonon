import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import styles from './style';

// const Button = props => (
//     <button onClick={() => props.onClick()} style={[styles.base, props.kind]} >{props.title} {props.kind}</button>
// )

class Button extends React.Component {
  static propTypes = {
    kind: PropTypes.oneOf(["primary", "warning"]).isRequired
  };

  render() {
    return (
      <button
        type={this.props.type}
        onClick={() => this.props.onClick()}
        style={[styles.base, styles[this.props.kind], {width: this.props.width}]}
      >
        {this.props.title}
      </button>
    );
  }
}

export default Radium(Button);
