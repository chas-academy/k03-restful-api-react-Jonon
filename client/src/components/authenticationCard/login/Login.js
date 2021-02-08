import React, { useState } from "react";
import Radium from "radium";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
// styles
import styles from "./style";
// components
import Button from "../../../assets/buttons/Button";
import Input from "../../../assets/form/Input";
import CloseButton from "../closeButton/CloseButton";

const Login = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div style={styles.base}>
      <form style={styles.container}>
        <Input
          type="text"
          placeholder="Username or E-mail"
          width="90%"
          rounded="true"
          required
          value={username}
        />
        <Input
          type="password"
          placeholder="Password"
          width="90%"
          rounded="true"
          required
          marginTop="0.5rem"
          value={password}
        />
        <Button
          title="Login"
          kind="tertiary"
          type="button"
          width="90%"
          marginTop="2rem"
          size="lgToMd"
          rounded
        />
        <CloseButton />
      </form>
    </div>
  );
};

export default Radium(Login);
