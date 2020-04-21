import React from "react";

// styles
import counterStyle from "./counterStyle";

const Counter = () => {
  return (
    <div style={counterStyle.rounded}>
      <p style={counterStyle.counterTitle}>0</p>
    </div>
  );
};

export default Counter;
