import React from "react";
import Radium from "radium";
//component
import ProductItem from "./ProductItem/ProductItem";
// styles
import productListStyle from "./ProductList.style";

const ProductList = () => {
  return (
    <ul style={productListStyle.list}>
      <div style={productListStyle.scroll}>
        <ProductItem />
      </div>
    </ul>
  );
};

export default Radium(ProductList);
