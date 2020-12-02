import React from "react";
import Radium from "radium";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
// styles
import styles from "./style";
// components
import Button from "../../../assets/buttons/Button";
import Input from "../../../assets/form/Input";
import CloseButton from "../closeButton/CloseButton";

const Login = () => {
  const window = useWindowDimensions();
  const { width } = window;
  const isMobile = width <= 768;

  const button = (
    <Button
      title="Login"
      kind="tertiary"
      type="submit"
      width="90%"
      marginTop="2rem"
      size={isMobile ? "lg" : "md"}
      rounded
    />
  );

  return (
    <div style={styles.base}>
      <form style={styles.container}>
        <Input
          type="text"
          placeholder="Username or E-mail"
          width="90%"
          rounded="true"
          required
        />
        <Input
          type="password"
          placeholder="Password"
          width="90%"
          rounded="true"
          required
          marginTop="0.5rem"
        />
        {button}
        <CloseButton />
      </form>
    </div>
  );
};

export default Radium(Login);
