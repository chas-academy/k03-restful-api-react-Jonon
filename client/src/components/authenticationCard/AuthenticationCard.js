import React, { useState } from "react";
import Button from "../buttons/Button";
import Login from "./login/Login";
import Register from "./register/Register";

const AuthenticationCard = () => {
  // false = login
  // true = register
  const [activeTab, setActiveTab] = useState(false);

  return (
    <div>
      <Button
        title="Login"
        width="50%"
        kind={!activeTab ? "secondary" : "primary"}
        fontFamily="Fjalla One, sans-serif"
        size="md"
        onClick={() => setActiveTab(false)}
      />
      <Button
        title="Register"
        width="50%"
        kind={activeTab ? "secondary" : "primary"}
        fontFamily="Fjalla One, sans-serif"
        size="md"
        onClick={() => setActiveTab(true)}
      />
      {!activeTab ? <Login /> : <Register />}
    </div>
  );
};

export default AuthenticationCard;
