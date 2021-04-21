import React from "react";
import Radium from "radium";
// assets
import Icon from "../../../../../../../../assets/icons";
// styles
import productQuantityStyle from "./ProductQuantity.style";

const AddRemoveProduct = ({ quantity }) => {
  return (
    <div style={[productQuantityStyle.center, productQuantityStyle.border]}>
      <Icon
        icon="remove"
        width="1.5rem"
        customStyle={productQuantityStyle.button}
        stroke="primary"
      />
      <div style={productQuantityStyle.quantity}>{quantity} </div>
      <Icon
        icon="add"
        width="1.5rem"
        customStyle={productQuantityStyle.button}
        stroke="primary"
      />
    </div>
  );
};

export default Radium(AddRemoveProduct);
