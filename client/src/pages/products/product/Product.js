import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import Radium from "radium";
// component
import ProductDetals from "./productDetals/ProductDetals";
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
        <ProductDetals items={items} />
        <p style={styles.margin}>{items.description}</p>
      </div>
      <div style={[styles.gridColumn, styles.margin]}>
        <Credits items={items} />
      </div>
    </div>
  );
};

export default Radium(Product);
