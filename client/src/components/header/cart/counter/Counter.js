import React, { Component } from "react";

// styles
import counterStyle from "./counterStyle";

class Counter extends Component {
  render() {
    return (
      <div style={counterStyle.rounded}>
        <p style={counterStyle.counterTitle}>0</p>
      </div>
    );
  }
}

export default Counter;
