import React from "react";
import Radium from "radium";
// assets
import Icon from "../../../../../../../../assets/icons";
// styles
import productQuantityStyle from "./ProductQuantity.style";

const AddRemoveProduct = ({ quantity }) => {
  return (
    <div style={[productQuantityStyle.center, productQuantityStyle.border]}>
      <Icon icon="remove" width="16" />
      <div style={productQuantityStyle.quantity}>{quantity}</div>
      <Icon icon="add" width="16" />
    </div>
  );
};

export default Radium(AddRemoveProduct);
