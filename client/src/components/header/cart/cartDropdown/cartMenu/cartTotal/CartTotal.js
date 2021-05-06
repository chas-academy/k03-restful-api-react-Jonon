import React from "react";
import { useSelector } from "react-redux";
// styles
import cartTotalStyle from "./CartTotal.style";

const CartTotal = () => {
  let cart = useSelector((state) => state.cart);
  let total = cart.total;
  total = total.toFixed(2);
  return (
    <div>
      <div style={cartTotalStyle.totalBox}>
        <span style={cartTotalStyle.totalTitle}>Total</span>
        <span style={cartTotalStyle.totalPrice}>{total}€</span>
      </div>
      <div style={cartTotalStyle.line}></div>
    </div>
  );
};

export default CartTotal;
