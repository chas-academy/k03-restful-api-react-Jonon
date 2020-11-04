import React, { useState } from "react";
import Button from "../buttons/Button";
import Login from "./forms/login/Login";
import Register from "./forms/register/Register";

const AuthenticationCard = () => {
  const [login, setLogin] = useState({
    showLogin: true,
  });
  const [register, setRegister] = useState({
    showRegister: false,
  });

  const showLogin = () => {
    setLogin({ showLogin: true });
    setRegister({ showRegister: false });
  };

  const showRegister = () => {
    setLogin({ showLogin: false });
    setRegister({ showRegister: true });
  };
  return (
    <div>
      <Button
        title="Login"
        width="50%"
        kind={login.showLogin ? "secondary" : "primary"}
        fontFamily="Fjalla One, sans-serif"
        size="md"
        onClick={showLogin}
      />
      <Button
        title="Register"
        width="50%"
        kind={register.showRegister ? "secondary" : "primary"}
        fontFamily="Fjalla One, sans-serif"
        size="md"
        onClick={showRegister}
      />
      <div style={{ display: login.showLogin ? "block" : "none" }}>
        <Login />
      </div>
      <div style={{ display: register.showRegister ? "block" : "none" }}>
        <Register />
      </div>
    </div>
  );
};

export default AuthenticationCard;
