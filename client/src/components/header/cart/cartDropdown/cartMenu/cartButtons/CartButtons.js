import React from "react";
// assets
import Button from "../../../../../../assets/buttons/Button";

// styles
import cartButtonsStyle from "./CartButtons.style";

const CartButtons = () => {
  return (
    <div style={cartButtonsStyle.align}>
      <Button
        kind="primary"
        title="View Cart"
        rounded="true"
        marginTop="0.5rem"
        size="md"
      />
      <Button
        kind="primary"
        title="Checkout"
        rounded="true"
        marginTop="0.5rem"
        size="md"
      />
    </div>
  );
};

export default CartButtons;
