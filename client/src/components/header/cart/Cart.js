import React from "react";
// Assets
import Icon from "../../../assets/icons";
// Components
import Counter from "./counter/Counter";

// styles
import cartStyle from "./cartStyle";

const Cart = () => {
  return (
    <div style={cartStyle.align}>
      <Icon icon="cart" fill="secondary" width="24" />
      <Counter />
    </div>
  );
};

export default Cart;
