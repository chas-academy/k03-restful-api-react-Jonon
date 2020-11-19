import React from "react";
import Radium from "radium";
import ProductCard from "./productCard/ProductCard";
import Search from "./Search/Search";
import styles from "./products.style";

const Products = (props) => {
  const { location } = props;
  return (
    <div style={styles.rowCenter}>
      <div style={[styles.columnCenter, styles.productsContainer]}>
        <Search />
        <ProductCard location={location} />
      </div>
    </div>
  );
};

export default Radium(Products);
