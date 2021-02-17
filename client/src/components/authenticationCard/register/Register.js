import React, { useState } from "react";
import Radium from "radium";
import { connect, useDispatch } from "react-redux";
// styles
import styles from "./style";
// components
import Button from "../../../assets/buttons/Button";
import Input from "../../../assets/form/Input";
import CloseButton from "../closeButton/CloseButton";
import { useHistory } from "react-router-dom";
// Action
import { hide_modal } from "../../../actions/modalActions";

const Register = ({ hide_modal }) => {
  let history = useHistory();
  let dispatch = useDispatch();

  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changeemail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    fetch("/users/register", {
      method: "POST",
      body: JSON.stringify({ name, username, email, password }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());

    clearForm();

    history.push("/");
    dispatch({ type: "HIDE_MODAL", payload: false });
  };

  const clearForm = () => {
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={styles.base}>
      <form style={styles.container} onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Name"
          width="90%"
          rounded="true"
          required
          onChange={changeName}
          value={name}
        />
        <Input
          type="text"
          placeholder="Username"
          width="90%"
          marginTop="0.5rem"
          rounded="true"
          required
          onChange={changeUsername}
          value={username}
        />
        <Input
          type="email"
          placeholder="E-mail"
          width="90%"
          marginTop="0.5rem"
          rounded="true"
          required
          onChange={changeemail}
          value={email}
        />
        <Input
          type="password"
          placeholder="Password"
          width="90%"
          marginTop="0.5rem"
          rounded="true"
          required
          onChange={changePassword}
          value={password}
        />
        <Button
          type="submit"
          title="Register"
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

export default Radium(Register);
