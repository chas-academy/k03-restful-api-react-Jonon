import React, { useState } from "react";
import Radium from "radium";
import { useHistory } from "react-router-dom";
// styles
import styles from "./style";
// components
import Button from "../../../assets/buttons/Button";
import Input from "../../../assets/form/Input";
import CloseButton from "../closeButton/CloseButton";

const Login = () => {
  let history = useHistory();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("jwtToken", res.token);
      })
      .catch((error) => {
        console.log(error);
      });

    history.push("/");
    clearForm();
  };

  const clearForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={styles.base}>
      <form style={styles.container} onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Username or E-mail"
          width="90%"
          rounded="true"
          required
          onChange={changeUsername}
          value={username}
        />
        <Input
          type="password"
          placeholder="Password"
          width="90%"
          rounded="true"
          required
          marginTop="0.5rem"
          onChange={changePassword}
          value={password}
        />
        <Button
          type="submit"
          title="Login"
          kind="tertiary"
          width="91%"
          marginTop="2rem"
          size="lgToMd"
          rounded
          value="Submit"
        />
        <CloseButton />
      </form>
    </div>
  );
};

export default Radium(Login);
