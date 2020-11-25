import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import Radium from "radium";
// Asset
import Button from "../../../assets/buttons/Button";
// component
import Credits from "./credits/Credits";
// styles
import styles from "./products.style";

const Product = () => {
  const [items, setItems] = useState([]);

  const { params } = useRouteMatch();
  const getProducts = () => {
    fetch(`/products/${params.category}/${params.series}/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  };

  useEffect(getProducts, []);

  return (
    <div style={[styles.base, styles.threeColumns]}>
      <div style={styles.desktopLayout}>
        <div>
          <img src={items.poster} style={styles.image} alt="poster" />
          <h3 style={styles.title}>{items.title}</h3>
          <h4 style={styles.price}>Price {items.price}</h4>
          <Button title="Add to cart" kind="primary" width="100%" size="lg" />
        </div>
        <p style={styles.margin}>{items.description}</p>
      </div>
      <div style={[styles.gridColumn, styles.margin]}>
        <Credits items={items} />
      </div>
    </div>
  );
};

export default Radium(Product);
