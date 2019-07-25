import React, { Component } from "react";
import styles from "./style";
import Radium from "radium";
import Button from "../buttons/Button";
import ReactDOM from "react-dom";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        color: "#4B3A39"
      },
      notSelected: {
        backgroundColor: "#C61017",
        color: "#FFFFFF"
      }
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
            <div style={{ width: "100%" }}>
              <Button title="Login" activeButton={this.state.selected} />
              <Button title="Register" btnInactive={this.state.notSelected} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Modal);
