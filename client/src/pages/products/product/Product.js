import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import Radium from "radium";
import Button from "../../../assets/buttons/Button";
import styles from "./style";

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
          <h3>{items.title}</h3>
          <h4>
            Price
            <span>{items.price}</span>
          </h4>
          <Button title="Add to cart" kind="primary" width="100%" size="lg" />
        </div>
        <p style={styles.margin}>{items.description}</p>
      </div>
      <div style={[styles.gridColumn, styles.margin]}>
        <div>
          <h4>Creators</h4>
          <ul style={styles.disableListStyle}>
            <li>
              <span style={styles.listHeader}>Writer</span>
              <ul style={styles.disableListStyle}>
                <li style={styles.listItem}>{items.writer}</li>
              </ul>
            </li>
            <li>
              <span style={styles.listHeader}>Artist</span>
              <ul style={styles.disableListStyle}>
                <li style={styles.listItem}>{items.artist}</li>
              </ul>
            </li>
            <li>
              <span style={styles.listHeader}>Cover artist</span>
              <ul style={styles.disableListStyle}>
                <li style={styles.listItem}>{items.coverArtist}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4>Publication</h4>
          <ul style={styles.disableListStyle}>
            <li>
              <span style={styles.listHeader}>Publisher</span>
              <ul style={styles.disableListStyle}>
                <li style={styles.listItem}>{items.publisher}</li>
              </ul>
            </li>
            <li>
              <span style={styles.listHeader}>Publication date</span>
              <ul style={styles.disableListStyle}>
                <li style={styles.listItem}>{items.publicationDate}</li>
              </ul>
            </li>
            <li>
              <span style={styles.listHeader}>Pages</span>
              <ul style={styles.disableListStyle}>
                <li style={styles.listItem}>{items.pages}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Radium(Product);
