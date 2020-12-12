import React from "react";
import { Link } from "react-router-dom";
import Radium from "radium";
// Assets
import Icon from "../../assets/icons";
// styles
import styles from "./logo.style";
import colors from "../../styles/colors";
import link from "../../styles/link.style";

const Logo = () => {
  return (
    <Link style={link.noUnderline} to="/">
      <div style={styles.alignCenter}>
        <h1 style={[styles.title, { color: colors.shades.white00 }]}>Comic</h1>
        <Icon icon="logo" width="32" fill="secondary" />
        <h1 style={[styles.title, { color: colors.shades.white00 }]}>aven</h1>
      </div>
    </Link>
  );
};

export default Radium(Logo);
