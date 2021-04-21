import React from "react";
//assets
import Icon from "../../../../../../../assets/icons";
//styles
import productItemStyle from "./ProductItem.style";
//components
import ProductQuantity from "./productQuantity/ProductQuantity";

const ProductItem = () => {
  let items = [
    {
      id: 0,
      title: "Vampironica #1 ",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/818279/818279._SX1280_QL80_TTD_.jpg",
      price: "0.75",
      quantity: 2,
    },
    {
      id: 1,
      title: "Silk #1",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/911523/911523._SX1280_QL80_TTD_.jpg",
      price: "4,49",
      quantity: 3,
    },
  ];

  return (
    <>
      {items.map((item) => (
        <li>
          <div style={productItemStyle.gridContainer}>
            <img style={productItemStyle.poster} src={item.image} />
            <div style={productItemStyle.contentContainer}>
              <div style={productItemStyle.flexContainer}>
                <div style={productItemStyle.title}>{item.title}</div>
                <Icon
                  icon="close"
                  width="24"
                  fill="primary"
                  customStyle={productItemStyle.close}
                />
              </div>
              <div style={productItemStyle.flexContainer}>
                <div style={productItemStyle.price}>{item.price}€</div>
                <ProductQuantity quantity={item.quantity} />
              </div>
            </div>
          </div>
          <div style={productItemStyle.dividerLine}></div>
        </li>
      ))}
    </>
  );
};

export default ProductItem;
