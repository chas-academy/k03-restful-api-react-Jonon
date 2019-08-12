import React, { Component } from "react";
import Icon from "../../icons/Icon";
import Counter from "./counter/Counter";

// styles
import cartStyle from "./cartStyle";

class Cart extends Component {
  render() {
    return (
      <div style={cartStyle.align}>
        <Icon icon={"typcn typcn-shopping-cart"} color="primary"  />
        <Counter />
      </div>
    );
  }
}

export default Cart;
