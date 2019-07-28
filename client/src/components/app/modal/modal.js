import React, { Component } from "react";
import styles from "./style";
import Radium from "radium";

import Tabs from './tabs/Tabs';
import LoginForm from './loginForm/LoginForm';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
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
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Modal);
