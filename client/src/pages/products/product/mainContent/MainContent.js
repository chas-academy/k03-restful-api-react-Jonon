import React from "react";
// Assets
import Button from "../../../../assets/buttons/Button";
// styles
import styles from "./mainContent.style";

const MainContent = ({ items }) => {
  return (
    <div>
      <img src={items.poster} style={styles.image} alt="poster" />
      <h3 style={styles.title}>{items.title}</h3>
      <h4 style={styles.price}>Price {items.price}</h4>
      <Button title="Add to cart" kind="primary" width="100%" size="lg" />
    </div>
  );
};

export default MainContent;
