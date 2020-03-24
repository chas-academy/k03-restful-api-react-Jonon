import React from "react";
import Radium from "radium";
import Styles from "./style";
import Search from "./search/Search";
import Categories from "./categories/categories";
import { connect } from "react-redux";

const DropdownMenu = (props) => {
    return (
      <div ref={props.outside}
        style={[
          { display: props.menu.payload.show ? "block" : "none" },
          Styles.dropdownContainer
        ]}
      >
        <div style={Styles.dropdownBase} >
          <Search />
          <div style={Styles.hiddenScrollbar}>
            <Categories />
          </div>
        </div>
      </div>
    );
  }

const mapToProps = (state) => {
  return {
    menu: state.menu
  }
}


export default connect(mapToProps, null)(Radium(DropdownMenu));
