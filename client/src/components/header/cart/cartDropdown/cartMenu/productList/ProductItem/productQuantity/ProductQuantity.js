import React from "react";
import Radium from "radium";
import { useDispatch } from "react-redux";
// assets
import Icon from "../../../../../../../../assets/icons";
// styles
import productQuantityStyle from "./ProductQuantity.style";

const ProductQuantity = ({ quantity, id }) => {
  let dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = () => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

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

export default Radium(ProductQuantity);
