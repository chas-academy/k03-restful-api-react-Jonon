import React from "react";
import PropTypes from "prop-types";
import Radium from "radium";
import { Link } from "react-router-dom";
import styles from "./categorySubitem.style";

const CategorySubitem = ({ categorySubitem, category }) => {
  return (
    <div>
      <Link style={styles.link} to={`/products/${category}/`}>
        <li style={[styles.subCategory, styles.item]}>All</li>
      </Link>
      {categorySubitem.map((subitem) => (
        <Link style={styles.link} to={`/products/${category}/${subitem.title}`}>
          <li key={subitem._id} style={[styles.subCategory, styles.item]}>
            {subitem.title}
          </li>
        </Link>
      ))}
    </div>
  );
};

CategorySubitem.propTypes = {
  categorySubitem: PropTypes.func.isRequired,
  category: PropTypes.func.isRequired,
};

export default Radium(CategorySubitem);
