import React from "react";
import Icon from "../../icons/Icon";
import Counter from "./counter/Counter";

// styles
import cartStyle from "./cartStyle";

const Cart = () => {
  return (
    <div style={cartStyle.align}>
      <Icon icon="typcn typcn-shopping-cart" color="quaternary" />
      <Counter />
    </div>
  );
};

export default Cart;
