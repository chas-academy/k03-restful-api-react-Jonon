import React, { Component } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import Avatar from "./Avatar";
import Cart from "./Cart";

export default class Header extends Component {
  render() {
    return (
      <div>
        <HamburgerMenu />
        <h1>ComicHaven</h1>
        <Avatar />
        <Cart />
      </div>
    );
  }
}
