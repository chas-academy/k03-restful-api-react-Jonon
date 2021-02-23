import React, { useState, useEffect } from "react";
import Radium from "radium";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
// styles
import styles from "./style";
// components
import Button from "../../../assets/buttons/Button";
import Input from "../../../assets/form/Input";
import CloseButton from "../closeButton/CloseButton";

const Login = () => {
  let history = useHistory();
  let dispatch = useDispatch();

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

  const onSubmit = (e, res) => {
    e.preventDefault();
    fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        const { token } = res;
        localStorage.setItem("jwtToken", token);
      })
      .catch((error) => {
        res.json(error);
        console.log(error);
      });

    clearForm();

    history.push("/");
    dispatch({ type: "HIDE_MODAL", payload: false });
  };

  const clearForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    // Check if token exist
    if (!localStorage.getItem("jwtToken")) {
    } else if (localStorage.getItem("jwtToken")) {
      const token = localStorage.getItem("jwtToken");
      const decoded = jwt_decode(token);
    }
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
