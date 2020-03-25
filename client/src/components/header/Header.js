import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";
import UserIconButton from "./userIconButton/UserIconButton";
import Cart from "./cart/Cart";
import DropdownMenu from "../menu/DropdownMenu";

// styles
import Radium from "radium";
import styles from "./headerStyle";
import colors from "../styles/colors";
import { hide_menu } from "../../actions/menuActions";
import { connect } from "react-redux";



const Header = (props) => {
  const node = useRef();

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      // stop propagation
      return false;
    }
    // outside click
    // check if menu is open
    if(props.menu.payload) {
      //dispatch action to hide menu
      props.hide_menu()
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div>
      <nav
        style={[
          styles.layout.flex,
          styles.base,
          colors.backgroundcolor.primary
        ]}
      >
        <div ref={node} style={{height: '100%'}} >
          <div style={{ marginLeft: "1rem" }}>
            <HamburgerMenu />
          </div>

          {/* push nav */}
          <div style={{ marginTop: "2.5rem" }} />
          <DropdownMenu />
        </div>

        <Link to={"/"}>
          <h1 style={[styles.title, colors.color.primary]}>ComicHaven</h1>
        </Link>

        <div style={[styles.layout.flex, { marginRight: "1rem" }]}>
          <UserIconButton modal={props.showModal} />
          <Cart />
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    menu: state.menu
  }
}

const mapDispatchToProps = dispatch => {
  return{
    hide_menu: () => {dispatch(hide_menu)}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Header));
