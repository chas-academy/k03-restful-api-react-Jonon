import React from "react";
import { Link } from "react-router-dom";
import Radium from "radium";
// styles
import styles from "./logo.style";
import colors from "../styles/colors";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <h1 style={[styles.title, colors.color.primary]}>ComicHaven</h1>
      </Link>
    </div>
  );
};

export default Radium(Logo);
