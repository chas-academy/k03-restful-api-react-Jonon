import React, { useState, useEffect } from "react";
import styles from "./style";
import Radium from "radium";

import Login from "./forms/login/Login";
import Register from "./forms/register/Register";
import Button from "../buttons/Button";
import { connect } from "react-redux";

const Modal = props => {
  const [login, setLogin] = useState({
    showLogin: true
  });
  const [register, setRegister] = useState({
    showRegister: false
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
    <div
      style={[
        { display: props.modal.payload ? "block" : "none" },
        styles.modalOverlay
      ]}
    >
      <div style={styles.center}>
        <div style={styles.modalBox} ref={props.outside}>
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

const mapToProps = state => {
  return {
    modal: state.modal
  };
};

export default connect(mapToProps, null)(Radium(Modal));
