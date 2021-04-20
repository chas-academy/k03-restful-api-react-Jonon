import React from "react";
// styles
import cartTotalStyle from "./CartTotal.style";

const CartTotal = () => {
  return (
    <div style={cartTotalStyle.totalBox}>
      <span style={cartTotalStyle.totalTitle}>Total</span>
      <span style={cartTotalStyle.totalPrice}>5.24€</span>
    </div>
  );
};

export default CartTotal;
