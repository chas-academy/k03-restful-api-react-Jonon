import React from "react";
//assets
import Icon from "../../../../../../../assets/icons";
//styles
import productItemStyle from "./ProductItem.style";
//components
import ProductQuantity from "./productQuantity/ProductQuantity";
import { useSelector, useDispatch } from "react-redux";

const ProductItem = () => {
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  const removeItem = (e) => {
    let id = e.currentTarget.id;
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <>
      {cart.items.length ? (
        cart.items.map((item, index) => (
          <li key={index}>
            <div style={productItemStyle.gridContainer}>
              <img style={productItemStyle.poster} src={item.poster} />
              <div style={productItemStyle.contentContainer}>
                <div style={productItemStyle.flexContainer}>
                  <div style={productItemStyle.title}>{item.title}</div>
                  <div id={item._id} onClick={removeItem}>
                    <Icon
                      icon="close"
                      width="24"
                      fill="primary"
                      customStyle={productItemStyle.close}
                    />
                  </div>
                </div>
                <div style={productItemStyle.flexContainer}>
                  <div style={productItemStyle.price}>{item.price}€</div>
                  <ProductQuantity quantity={item.quantity} id={item._id} />
                </div>
              </div>
            </div>
            <div style={productItemStyle.dividerLine}></div>
          </li>
        ))
      ) : (
        <p>Cart is empty</p>
      )}
    </>
  );
};

export default ProductItem;
