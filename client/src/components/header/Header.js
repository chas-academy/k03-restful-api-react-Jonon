import React from "react";
import { Link } from "react-router-dom";
import Radium from "radium";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";
import UserIconButton from "./userIconButton/UserIconButton";
import Cart from "./cart/Cart";
import DropdownMenu from "../menu/DropdownMenu";
import CategoryItem from "../menu/categories/categoryItem";

// styles
import styles from "./headerStyle";
import colors from "../styles/colors";

const Header = () => {
  return (
    <div>
      <nav style={[styles.layout.flex, styles.base, colors.backgroundcolor.primary]}>
        <div style={{ height: "100%" }}>
          <div style={{ marginLeft: "1rem" }}>
            <HamburgerMenu />
          </div>

          <DropdownMenu>
            <CategoryItem />
          </DropdownMenu>
        </div>

        <Link to="/">
          <h1 style={[styles.title, colors.color.primary]}>ComicHaven</h1>
        </Link>

        <div style={[styles.layout.flex, { marginRight: "1rem" }]}>
          <UserIconButton />
          <Cart />
        </div>
      </nav>
    </div>
  );
};

export default Radium(Header);
