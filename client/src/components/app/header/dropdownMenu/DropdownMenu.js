import React, { Component } from "react";
import Styles from "./style";
import Search from "./search/Search";

class DropdownMenu extends Component {
  render() {
    return (
      <div style={Styles.container}>
        <div style={Styles.base}>
          <Search />
        </div>
      </div>
    );
  }
}

export default DropdownMenu;
