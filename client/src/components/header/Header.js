import React from "react";

import Radium from "radium";

// components
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";
import UserIconButton from "./userIconButton/UserIconButton";
import Cart from "./cart/Cart";
import DropdownMenu from "../menu/DropdownMenu";
import CategoryItem from "../menu/categories/categoryItem";
import Logo from "./Logo";

// styles
import styles from "./headerStyle";
import colors from "../../styles/colors";

const Header = () => {
  return (
    <div>
      <nav
        style={[
          styles.layout.flex,
          styles.base,
          { backgroundColor: colors.primary },
        ]}
      >
        <div style={{ height: "100%" }}>
          <div style={{ marginLeft: "1rem" }}>
            <HamburgerMenu />
          </div>

          <DropdownMenu>
            <CategoryItem />
          </DropdownMenu>
        </div>

        <Logo />

        <div style={[styles.layout.flex, { marginRight: "1rem" }]}>
          <UserIconButton />
          <Cart />
        </div>
      </nav>
    </div>
  );
};

export default Radium(Header);
