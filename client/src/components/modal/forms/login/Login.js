import React from "react";
import Radium from "radium";
import styles from "../style";
import Button from "../../../buttons/Button";

const Login = () => {
  return (
    <div style={styles.base}>
      <form style={styles.container}>
        <input type="text" placeholder="Username or E-mail" style={[styles.input]} />
        <input type="password" placeholder="Password" style={[styles.input]} />
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
};

export default Radium(Login);
