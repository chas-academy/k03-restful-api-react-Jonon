import React from "react";
import Radium from "radium";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
// styles
import styles from "./style";
// components
import Button from "../../../assets/buttons/Button";
import Input from "../../../assets/form/Input";
import CloseButton from "../closeButton/CloseButton";

const Register = () => {
  const window = useWindowDimensions();
  const { width } = window;
  const isMobile = width <= 768;

  const button = (
    <Button
      type="submit"
      title="Register"
      kind="tertiary"
      width="91%"
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
          placeholder="Username"
          width="90%"
          rounded="true"
          required
        />
        <Input
          type="email"
          placeholder="E-mail"
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
        />
        {button}
        <CloseButton />
      </form>
    </div>
  );
};

export default Radium(Register);
