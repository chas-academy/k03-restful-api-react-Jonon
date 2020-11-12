import React from "react";
import Radium from "radium";
import { connect } from "react-redux";
// styles
import Styles from "./closeButton.style";
// actions
import { hide_modal } from "../../../actions/modalActions";

const CloseButton = ({ hide_modal }) => {
  return (
    <div>
      <p onClick={hide_modal} style={Styles}>
        Cancel
      </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    hide_modal: () => dispatch(hide_modal),
  };
};

export default connect(null, mapDispatchToProps)(Radium(CloseButton));
