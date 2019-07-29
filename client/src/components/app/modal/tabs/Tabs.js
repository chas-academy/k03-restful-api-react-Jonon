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
    };
  }

    render() {
        return (
            <div style={styles.buttonWrapper}>
              <button
                style={[
                  styles.button,
                  this.props.loginBtn
                    ? this.state.selected
                    : this.state.notSelected
                ]}
                onClick={this.props.showLogin}
                key={"btn" + 1}
              >
                Login
              </button>
              <button
                style={[
                  styles.button,
                  this.props.registerBtn
                    ? this.state.selected
                    : this.state.notSelected
                ]}
                onClick={this.props.showRegister}
                key={"btn" + 2}
              >
                Register
              </button>
            </div>
        )
    }
}

export default Radium(Tabs);