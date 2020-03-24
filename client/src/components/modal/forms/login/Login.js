import React, { Component } from "react";
import styles from "../style";
import Radium from "radium";
import Button from "../../../buttons/Button";

class Login extends Component {
  render() {
    return (
      <div style={styles.base}>
        <form style={styles.container}>
          <input
            type="text"
            placeholder="Username or E-mail"
            style={[styles.input]}
          />
          <input
            type="password"
            placeholder="Password"
            style={[styles.input]}
          />
          <Button
            title="Login"
            kind="primary"
            type="submit"
            width="91%"
            marginTop="2rem"
            size="md"
          />
        </form>
      </div>
    );
  }
}

export default Radium(Login);
