import React, { useState, useEffect, useRef } from "react";
import Radium from "radium";
import { connect } from "react-redux";
import styles from "./style";

import Login from "./forms/login/Login";
import Register from "./forms/register/Register";
import Button from "../buttons/Button";
import { hide_modal } from "../../actions/modalActions";

const Modal = (props) => {
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

  const node = useRef();

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      // stop propagation
      return false;
    }
    // outside click
    // check if modal is open
    if (props.modal.payload) {
      // dispatch action to hide modal
      props.hide_modal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div
      style={[
        { display: props.modal.payload ? "block" : "none" },
        styles.modalOverlay,
      ]}
    >
      <div style={styles.center}>
        <div style={styles.modalBox} ref={node}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    hide_modal: () => dispatch(hide_modal),
  };
};

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Modal));
