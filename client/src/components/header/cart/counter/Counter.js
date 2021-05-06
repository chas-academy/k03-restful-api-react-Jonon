import React from "react";
import { useSelector } from "react-redux";

// styles
import counterStyle from "./counterStyle";

const Counter = () => {
  let cart = useSelector((state) => state.cart);

  return (
    <div style={counterStyle.rounded}>
      <p style={counterStyle.counterTitle}>{cart.totalItems}</p>
    </div>
  );
};

export default Counter;
