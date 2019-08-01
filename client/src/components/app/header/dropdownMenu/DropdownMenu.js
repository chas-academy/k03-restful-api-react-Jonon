import React, { Component } from "react";
import Radium from "radium";
import Styles from "./style";
import Search from "./search/Search";

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state= {
      show: false
    }
  }
 

  render() {
    return (
      <div style={[{display: this.state.show ? "block" : "none"}, Styles.container]}>
        <div style={Styles.base}>
          <Search />
        </div>
      </div>
    );
  }
}

export default Radium(DropdownMenu);
