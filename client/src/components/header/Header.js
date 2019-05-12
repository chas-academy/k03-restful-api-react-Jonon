import React, { Component } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import Avatar from "./icons/Avatar";
import Cart from "./icons/Cart";

// styles
import Radium from "radium";
import styles from "../../styles/styles";
import colors from "../../styles/colors";

const header = {
  base: {
    padding: "0 1rem 0 1rem",
    height: "2rem",
    fontFamily: "Fjalla One, sans-serif",
    lineHeight: "1"
  }
};

class Header extends Component {
  render() {
    return (
      <nav
        style={[
          styles.layout.flex,
          header.base,
          colors.backgroundcolor.primary
        ]}
      >
        <HamburgerMenu />
        <h1 style={[styles.title, colors.color.primary]}>ComicHaven</h1>
        <div style={styles.layout.flex}>
          <Avatar />
          <Cart />
        </div>
      </nav>
    );
  }
}

export default Radium(Header);
