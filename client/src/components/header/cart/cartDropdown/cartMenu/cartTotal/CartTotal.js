import React from "react";
// styles
import cartTotalStyle from "./CartTotal.style";
// assets
import Button from "../../../../../../assets/buttons/Button";

const CartTotal = () => {
  return (
    <div style={cartTotalStyle.container}>
      <div style={cartTotalStyle.totalBox}>
        <span style={cartTotalStyle.totalTitle}>Total</span>
        <span style={cartTotalStyle.totalPrice}>5.24€</span>
      </div>
      <Button kind="primary" title="View Cart" rounded="true" marginTop="0.5rem" />
      <Button kind="primary" title="Checkout" rounded="true" marginTop="0.5rem" />
    </div>
  );
};

export default CartTotal;
