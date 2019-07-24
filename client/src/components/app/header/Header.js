import React, { Component } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";
import UserIconButton from "./userIconButton/UserIconButton";
import Cart from "./cart/Cart";

// styles
import Radium from "radium";
import styles from "./headerStyle";
import colors from "../styles/colors";

class Header extends Component {
  render() {
    console.log(this.props.showModal)
    return (
      <nav
        style={[
          styles.layout.flex,
          styles.base,
          colors.backgroundcolor.primary
        ]}
      >
        <HamburgerMenu />
        <Link to={"/"}><h1 style={[styles.title, colors.color.primary]}>ComicHaven</h1></Link>
        
        <div style={styles.layout.flex}>
          <UserIconButton modal={this.props.showModal} />
          <Cart />
        </div>
      </nav>
    );
  }
}

export default Radium(Header);
