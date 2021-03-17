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
  // Input needed as value in inputfield for being able to erase letters
  const [input, setInput] = useState();

  const changeUsername = (value) => {
    setUsername(value);
  };
  const changeEmail = (value) => {
    setEmail(value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChange = (e) => {
    let inputValue = e.target.value;

    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Check for valid email
    if (regEmail.test(inputValue)) {
      changeEmail(e.target.value);
    } else {
      // If not email set as username
      changeUsername(e.target.value);
    }
  };

  const onSubmit = (e, res) => {
    e.preventDefault();
    fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        const { token } = res;
        if (typeof token === "undefined") {
          return console.log("Username or password is wrong");
        } else {
          localStorage.setItem("jwtToken", token);
          checkToken();
          clearForm();

          history.push("/");
          dispatch({ type: "HIDE_MODAL", payload: false });
          // Hide menu
          dispatch({ type: "HIDE", payload: false });
        }
      })
      .catch((err) => console.log("Fetch error: ", err));
  };

  const clearForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setInput("");
  };

  useEffect(() => {
    checkToken();
  });

  const checkToken = () => {
    // Check if token exist
    if (localStorage.getItem("jwtToken")) {
      const token = localStorage.getItem("jwtToken");
      const decoded = jwt_decode(token);
      dispatch({ type: "AUTHENTICATED", payload: decoded });
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
          onChange={handleChange}
          value={input}
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
