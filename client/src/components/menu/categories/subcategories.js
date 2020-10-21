import React from "react";
import Radium from "radium";
import styles from "./style";

const Subcategories = ({ title }) => {
  return <li style={[styles.subCategory, styles.item]}>{title}</li>;
};

export default Radium(Subcategories);
