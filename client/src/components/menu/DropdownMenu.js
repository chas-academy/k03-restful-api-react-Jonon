import React from "react";
import Radium from "radium";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Styles from "./style";
import Categories from "./categories/categories";

const DropdownMenu = (props) => {
  const { outside, menu } = props;
  return (
    <div
      ref={outside}
      style={[{ display: menu ? "block" : "none" }, Styles.dropdownContainer]}
    >
      <div style={Styles.dropdownBase}>
        <div style={Styles.hiddenScrollbar}>
          <Categories />
        </div>
      </div>
    </div>
  );
};

DropdownMenu.propTypes = {
  menu: PropTypes.func.isRequired,
  outside: PropTypes.bool.isRequired,
};

const mapToProps = (state) => {
  return {
    menu: state.menu.payload.show,
  };
};

export default connect(mapToProps, null)(Radium(DropdownMenu));
