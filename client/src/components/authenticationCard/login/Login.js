import React from "react";
import Radium from "radium";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
// styles
import styles from "./style";
// components
import Button from "../../buttons/Button";

const Login = () => {
  const window = useWindowDimensions();
  const { width } = window;
  const isMobile = width <= 768;

  const button = (
    <Button
      title="Login"
      kind="primary"
      type="submit"
      width="90%"
      marginTop="2rem"
      size={isMobile ? "lg" : "md"}
      padding="1rem"
      fontSize="1rem"
    />
  );

  return (
    <div style={styles.base}>
      <form style={styles.container}>
        <input type="text" placeholder="Username or E-mail" style={[styles.input]} />
        <input type="password" placeholder="Password" style={[styles.input]} />
        {button}
        <p>Cancel</p>
      </form>
    </div>
  );
};

export default Radium(Login);
