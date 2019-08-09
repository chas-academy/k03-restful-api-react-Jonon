import React, { Component } from "react";
import Radium from "radium";
import Styles from "./style";
import Search from "./search/Search";
import Categories from "./categories/categories"; 

class DropdownMenu extends Component {
  render() {
    return (
      <div style={[{display: this.props.show ? "block" : "none"}, Styles.dropdownContainer]} >
        <div style={Styles.dropdownBase} ref={this.props.outside}>
          <Search />
          <Categories />
        </div>
      </div>
    );
  }
}

export default Radium(DropdownMenu);