import React from "react";
import Radium from "radium";
// assets
import Icon from "../../../../../../../../assets/icons";
// styles
import productQuantityStyle from "./ProductQuantity.style";

const AddRemoveProduct = () => {
  return (
    <div style={[productQuantityStyle.center, productQuantityStyle.border]}>
      <Icon icon="remove" width="16" />
      <div style={productQuantityStyle.quantity}>5</div>
      <Icon icon="add" width="16" />
    </div>
  );
};

export default Radium(AddRemoveProduct);
