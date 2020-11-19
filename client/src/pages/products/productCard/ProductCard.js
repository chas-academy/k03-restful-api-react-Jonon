import React, { useState, useEffect } from "react";
import Radium from "radium";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// styles
import styles from "./productCard.style";
import link from "../../../styles/link.style";
// components
import Button from "../../../assets/buttons/Button";

const ProductList = (props) => {
  const { location } = props;
  const [items, setItems] = useState({
    items: [],
  });

  useEffect(() => {
    fetch(`${location.pathname}`)
      .then((res) => res.json())
      .then((data) => {
        setItems({
          items: data,
        });
      });
  }, [location.pathname]);

  const comics = items.items.map((item) => {
    return (
      <li style={[styles.posterBox]} key={item._id}>
        <Link
          style={link.noUnderline}
          to={`${location.pathname}${item.series}/${item._id}`}
        >
          <div style={styles.productList} key={item._id}>
            <img src={item.poster} style={styles.image} alt="poster" />
            <h3 style={[styles.posterText, styles.title]}>{item.title}</h3>
            <h4 style={[styles.posterText, styles.price]}>{item.price}€</h4>
          </div>
        </Link>
        <div
          style={{
            marginBottom: "0.5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            title="Add to cart"
            kind="tertiary"
            width="90%"
            size="md"
            rounded="true"
          />
        </div>
      </li>
    );
  });
  return <ul style={[styles.posterContainer]}>{comics}</ul>;
};

ProductList.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Radium(ProductList);
