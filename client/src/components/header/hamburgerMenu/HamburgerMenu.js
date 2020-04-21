import React from "react";
import Radium from "radium";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import colors from "../../styles/colors";
import { show_menu } from "../../../actions/menuActions";

const HamburgerMenu = ({ show_menu }) => {
  return (
    <div>
      <ion-icon
        style={[colors.color.secondary, { cursor: "pointer" }]}
        size="large"
        name="menu"
        onClick={show_menu}
      />
    </div>
  );
};

HamburgerMenu.propTypes = {
  show_menu: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    show_menu: () => {
      dispatch(show_menu);
    },
  };
};

export default connect(null, mapDispatchToProps)(Radium(HamburgerMenu));
