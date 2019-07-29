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
      showRegister: false,
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
    console.log(this.state.showLogin);
    console.log(this.state.showRegister)
    return (
      <div
        style={[
          { display: this.props.show ? "block" : "none" },
          styles.modalOverlay
        ]}
      >
        <div style={styles.center}>
          <div style={styles.modalBox} ref={this.props.outside}>
            <Tabs
              showLogin={this.showLogin.bind(this)}
              showRegister={this.showRegister.bind(this)}
              loginBtn={this.state.showLogin}
              registerBtn={this.state.showRegister}
              selected={this.state.selected}
              notSelected={this.state.notSelected}
            />
            <div style={{ display: this.state.showLogin ? "block" : "none" }}>
              <LoginForm />
            </div>
            <div
              style={{ display: this.state.showRegister ? "block" : "none" }}
            >
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Modal);
