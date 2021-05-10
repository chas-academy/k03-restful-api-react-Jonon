import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
// Assets
import Button from "../../../../assets/buttons/Button";
// styles
import styles from "./ProductDetals.style";

const ProductDetals = ({ items }) => {
  let dispatch = useDispatch();
  let location = useLocation();

  const addToCart = async (e) => {
    try {
      e.persist();
      // Persist path url
      const response = await fetch(`${location.pathname}`);
      const data = await response.json();
      let id = data._id;
      dispatch({ type: "ADD_TO_CART", payload: { data: data, id: id } });
    } catch (err) {
      console.error(err);
    }
  };

  console.log(location.pathname);
  return (
    <div>
      <img src={items.poster} style={styles.image} alt="poster" />
      <h3 style={styles.title}>{items.title}</h3>
      <div style={styles.spaceBetween}>
        <h4 style={styles.price}>Price</h4>
        <h4 style={styles.price}>{items.price}€</h4>
      </div>
      <Button
        title="Add to cart"
        kind="primary"
        width="100%"
        size="lg"
        onClick={addToCart}
      />
    </div>
  );
};

export default ProductDetals;
