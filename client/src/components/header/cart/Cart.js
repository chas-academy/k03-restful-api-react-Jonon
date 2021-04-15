import React from "react";
import { useDispatch } from "react-redux";
// Assets
import Icon from "../../../assets/icons";
// Components
import Counter from "./counter/Counter";
import CartDropDown from "./cartDropdown/CartDropdown";

// styles
import cartStyle from "./cartStyle";

const Cart = () => {
  let dispatch = useDispatch();

  const showCart = () => {
    dispatch({ type: "SHOW_CART", payload: true });
  };
  return (
    <div style={cartStyle.align}>
      <div onClick={showCart} style={cartStyle.cartButton}>
        <Icon icon="cart" fill="secondary" width="24" />
      </div>
      <Counter />
      <CartDropDown />
    </div>
  );
};

export default Cart;
