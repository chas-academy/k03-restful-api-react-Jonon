import React, { Component } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import Icon from "./icons/Icon";

// styles
import Radium from "radium";
import styles from "./headerStyle";
import colors from "../../styles/colors";

class Header extends Component {
  render() {
    return (
      <nav
        style={[
          styles.layout.flex,
          styles.base,
          colors.backgroundcolor.primary
        ]}
      >
        <HamburgerMenu />
        <h1 style={[styles.title, colors.color.primary]}>ComicHaven</h1>
        <div style={styles.layout.flex}>
          <Icon icon={"typcn typcn-user-outline"} />
          <Icon icon={"typcn typcn-shopping-cart"} />
        </div>
      </nav>
    );
  }
}

export default Radium(Header);
