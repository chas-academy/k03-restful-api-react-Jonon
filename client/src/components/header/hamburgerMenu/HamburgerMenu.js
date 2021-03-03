import React from "react";
import Radium from "radium";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// Assets
import Icon from "../../../assets/icons";
// styles
import Styles from "./hamburgerMenu.style";
// actions
import { show_menu } from "../../../redux/actions/menuActions";

const HamburgerMenu = ({ show_menu }) => {
  return (
    <div onClick={show_menu} style={Styles.align}>
      <Icon
        customStyle={{ cursor: "pointer" }}
        fill="primary"
        size="large"
        icon="menu"
        width="32"
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
