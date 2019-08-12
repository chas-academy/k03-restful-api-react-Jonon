import React, { Component } from "react";
import Radium from "radium";
import Styles from "./style";
import Search from "./search/Search";
import Categories from "./categories/categories";

class Menu extends Component {
  render() {
    return (
      <div style={{display: "flex"}} >
      <div style={{flex: "1", backgroundColor: "#FFFFFF"}} >
      <div style={[Styles.menuContainer]}>
          <Search />
          <div style={Styles.hiddenScrollbar}>
            <Categories />
          </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Radium(Menu);
