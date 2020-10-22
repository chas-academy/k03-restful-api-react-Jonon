import React from "react";
import Radium from "radium";
import { Link } from "react-router-dom";
import styles from "./categorySubitem.style";

const CategorySubitem = ({ categorySubitem, category }) => {
  return (
    <div>
      <Link style={styles.link} to={`/products/${category}/`}>
        <li style={[styles.subCategory, styles.item]}>All</li>
      </Link>
      {categorySubitem.map((subitem, id) => (
        <Link style={styles.link} to={`/products/${category}/${subitem.title}`}>
          <li key={id} style={[styles.subCategory, styles.item]}>
            {subitem.title}
          </li>
        </Link>
      ))}
    </div>
  );
};

export default Radium(CategorySubitem);
