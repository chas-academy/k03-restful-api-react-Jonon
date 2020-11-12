import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// styles
import Styles from "./closeButton.style";
// actions
import { hide_modal } from "../../../actions/modalActions";

const CloseButton = ({ hide_modal }) => {
  return (
    <div role="button" tabIndex={0} onKeyPress={hide_modal} onClick={hide_modal}>
      <p style={Styles}>Cancel</p>
    </div>
  );
};

CloseButton.propTypes = {
  hide_modal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    hide_modal: () => dispatch(hide_modal),
  };
};

export default connect(null, mapDispatchToProps)(Radium(CloseButton));
