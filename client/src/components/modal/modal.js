import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// styles
import styles from "./modal.style";
// Action
import { hide_modal } from "../../redux/actions/modalActions";

const Modal = ({ modal, hide_modal, children }) => {
  return ReactDom.createPortal(
    <div style={{ display: modal ? "block" : "none" }}>
      <div
        role="button"
        tabIndex={0}
        onClick={hide_modal}
        onKeyDown={hide_modal}
        style={styles.modalOverlay}
        aria-label="Hide modal"
      />
      <div style={styles.modalStyles}>{children}</div>
    </div>,
    document.getElementById("modal-portal")
  );
};

Modal.propTypes = {
  hide_modal: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    hide_modal: () => dispatch(hide_modal),
  };
};

const mapStateToProps = (state) => {
  return {
    modal: state.modal.payload,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
