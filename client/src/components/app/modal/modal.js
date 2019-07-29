import React, { Component } from "react";
import styles from "./style";
import Radium from "radium";

import Login from "./forms/login/Login";
import Register from "./forms/register/Register";
import Button from "../buttons/Button";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      showRegister: false
    };
  }

  showLogin = () => {
    this.setState({
      showLogin: true,
      showRegister: false
    });
  };

  showRegister = () => {
    this.setState({
      showLogin: false,
      showRegister: true
    });
  };

  render() {
    return (
      <div
        style={[
          { display: this.props.show ? "block" : "none" },
          styles.modalOverlay
        ]}
      >
        <div style={styles.center}>
          <div style={styles.modalBox} ref={this.props.outside}>
            <Button
              title="Login"
              width="50%"
              kind={this.state.showLogin ? "secondary" : "primary"}
              fontFamily="Fjalla One, sans-serif"
              onClick={() => this.showLogin()}
            />
            <Button
              title="Register"
              width="50%"
              kind={this.state.showRegister ? "secondary" : "primary"}
              fontFamily="Fjalla One, sans-serif"
              onClick={() => this.showRegister()}
            />
            <div style={{ display: this.state.showLogin ? "block" : "none" }}>
              <Login />
            </div>
            <div
              style={{ display: this.state.showRegister ? "block" : "none" }}
            >
              <Register />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Modal);
