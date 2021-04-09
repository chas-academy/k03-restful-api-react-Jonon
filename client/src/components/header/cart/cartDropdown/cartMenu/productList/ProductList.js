import React from "react";
//component
import ProductItem from "./ProductItem/ProductItem";
// styles
import productListStyle from "./ProductList.style";

const ProductList = () => {
  return (
    <ul style={productListStyle.list}>
      <ProductItem />
    </ul>
  );
};

export default ProductList;
