import React, { useState } from "react";
import Radium from "radium";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./style";

import Login from "./forms/login/Login";
import Register from "./forms/register/Register";
import Button from "../buttons/Button";
import { hide_modal } from "../../actions/modalActions";

const Modal = ({ modal, hide_modal }) => {
  const [login, setLogin] = useState({
    showLogin: true,
  });
  const [register, setRegister] = useState({
    showRegister: false,
  });

  const showLogin = () => {
    setLogin({ showLogin: true });
    setRegister({ showRegister: false });
  };

  const showRegister = () => {
    setLogin({ showLogin: false });
    setRegister({ showRegister: true });
  };

  return (
    <div style={{ display: modal ? "block" : "none" }}>
      <div
        role="button"
        tabIndex={0}
        onClick={hide_modal}
        onKeyDown={hide_modal}
        style={styles.modalOverlay}
        aria-label="Hide modal"
      />
      <div style={styles.modalStyles}>
        <div style={styles.modalBox}>
          <Button
            title="Login"
            width="50%"
            kind={login.showLogin ? "secondary" : "primary"}
            fontFamily="Fjalla One, sans-serif"
            size="md"
            onClick={showLogin}
          />
          <Button
            title="Register"
            width="50%"
            kind={register.showRegister ? "secondary" : "primary"}
            fontFamily="Fjalla One, sans-serif"
            size="md"
            onClick={showRegister}
          />
          <div style={{ display: login.showLogin ? "block" : "none" }}>
            <Login />
          </div>
          <div style={{ display: register.showRegister ? "block" : "none" }}>
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  hide_modal: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Modal));
