import React, { Component } from "react";
import styles from "./style";
import Radium from "radium";

import Tabs from "./tabs/Tabs";
import LoginForm from "./loginForm/LoginForm";
import RegisterForm from "./registerForm/RegisterForm";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      showRegister: false
    };
  }

  

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
            <Tabs />
            <div style={{ display: this.state.showLogin ? "block" : "none" }}>
              <LoginForm />
            </div>
            <div style={{ display: this.state.showRegister ? "block" : "none" }}>
            <RegisterForm />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Modal);
