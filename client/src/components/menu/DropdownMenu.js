import React from "react";
import Radium from "radium";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./style";
import { show_menu } from "../../actions/menuActions";

const DropdownMenu = (props) => {
  const { outside, menu, show_menu, children } = props;
  return (
    <div
      ref={outside}
      style={[{ display: menu ? "block" : "none" }, styles.dropdownContainer]}
    >
      <div
        onClick={show_menu}
        onKeyDown={show_menu}
        role="button"
        tabIndex={0}
        aria-label="show menu"
        style={styles.backdrop}
      />
      <div style={styles.content}>{children}</div>
    </div>
  );
};

DropdownMenu.propTypes = {
  menu: PropTypes.func.isRequired,
  show_menu: PropTypes.func.isRequired,
  outside: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    show_menu: () => {
      dispatch(show_menu);
    },
  };
};

const mapToProps = (state) => {
  return {
    menu: state.menu.payload.show,
  };
};

export default connect(mapToProps, mapDispatchToProps)(Radium(DropdownMenu));
