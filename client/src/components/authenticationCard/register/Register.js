import React from "react";
import Radium from "radium";
import styles from "./style";
import Button from "../../buttons/Button";

const Register = () => {
  return (
    <div style={styles.base}>
      <form style={styles.container}>
        <input type="text" placeholder="Username" style={[styles.input]} />
        <input type="email" placeholder="E-mail" style={[styles.input]} />
        <input type="password" placeholder="Password" style={[styles.input]} />
        <Button
          title="Register"
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

export default Radium(Register);