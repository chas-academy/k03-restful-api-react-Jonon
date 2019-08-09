import React, { Component } from "react";
import Radium from "radium";
import Styles from "./style";
import Search from "./search/Search";
import Categories from "./categories/categories"; 

class Menu extends Component {
  render() {
    return (
        <div style={Styles.menuBase}>
          <Search />
          <Categories />
        </div>
    );
  }
}

export default Radium(Menu);
