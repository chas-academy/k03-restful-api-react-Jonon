import React, { Component } from 'react'
import styles from './style';
import Radium from "radium";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        color: "#4B3A39",
        backgroundColor: "#FFFFFF"
      },
      notSelected: {
        backgroundColor: "#C61017",
        color: "#FFFFFF"
      },
      loginBtn: true,
      registerBtn: false
    };
  }

  selectLogin = () => {
    this.setState({
      loginBtn: true,
      registerBtn: false
    });
  };

  selectRegister = () => {
    this.setState({
      loginBtn: false,
      registerBtn: true
    });
  };
    render() {
        return (
            <div style={styles.buttonWrapper}>
              <button
                style={[
                  styles.button,
                  this.state.loginBtn
                    ? this.state.selected
                    : this.state.notSelected
                ]}
                onClick={this.selectLogin.bind(this)}
                key={"btn" + 1}
              >
                Login
              </button>
              <button
                style={[
                  styles.button,
                  this.state.registerBtn
                    ? this.state.selected
                    : this.state.notSelected
                ]}
                onClick={this.selectRegister.bind(this)}
                key={"btn" + 2}
              >
                Register
              </button>
            </div>
        )
    }
}

export default Radium(Tabs);