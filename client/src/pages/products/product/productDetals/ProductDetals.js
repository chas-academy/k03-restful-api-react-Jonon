import React from "react";
// Assets
import Button from "../../../../assets/buttons/Button";
// styles
import styles from "./ProductDetals.style";

const ProductDetals = ({ items }) => {
  return (
    <div>
      <img src={items.poster} style={styles.image} alt="poster" />
      <h3 style={styles.title}>{items.title}</h3>
      <div style={styles.spaceBetween}>
        <h4 style={styles.price}>Price</h4>
        <h4 style={styles.price}>{items.price}€</h4>
      </div>
      <Button title="Add to cart" kind="primary" width="100%" size="lg" />
    </div>
  );
};

export default ProductDetals;
