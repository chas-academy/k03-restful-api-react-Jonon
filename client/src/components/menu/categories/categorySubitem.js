import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Radium from "radium";
import { Link } from "react-router-dom";
// Styles
import styles from "./categorySubitem.style";
// actions
import { hide_menu } from "../../../actions/menuActions";

const CategorySubitem = ({ categorySubitem, category, hide_menu }) => {
  return (
    <div>
      <Link onClick={hide_menu} style={styles.link} to={`/products/${category}/`}>
        <li style={[styles.subCategory, styles.item]}>All</li>
      </Link>
      {categorySubitem.map((subitem) => (
        <Link
          onClick={hide_menu}
          style={styles.link}
          to={`/products/${category}/${subitem.title}`}
        >
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

const mapdispatchToProps = (dispatch) => {
  return {
    hide_menu: () => dispatch(hide_menu),
  };
};

export default connect(null, mapdispatchToProps)(Radium(CategorySubitem));
