import React from "react";
import { Link } from "react-router-dom";
import Radium from "radium";
// styles
import styles from "./logo.style";
import colors from "../../styles/colors";
import link from "../../styles/link.style";

const Logo = () => {
  return (
    <Link style={link.noUnderline} to="/">
      <div style={styles.alignCenter}>
        <h1 style={[styles.title, { color: colors.whites.variant00 }]}>Comic</h1>
        <svg
          width="18"
          height="35"
          viewBox="0 0 129 197"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M63.5 0L0 130H28.5L37.5 111.5H78.5L63.5 142.5V197L128.5 68H99L89.5 87.5H48L63.5 54.5V0Z"
            fill={colors.whites.variant00}
          />
        </svg>
        <h1 style={[styles.title, { color: colors.whites.variant00 }]}>aven</h1>
      </div>
    </Link>
  );
};

export default Radium(Logo);
