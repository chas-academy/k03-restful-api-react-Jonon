import React, { useState } from "react";
import Radium from "radium";
// Hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";
// Components
import Button from "../buttons/Button";
import Login from "./login/Login";
import Register from "./register/Register";
import Logo from "./Logo";
// styles
import Styles from "./AuthenticationCard.style";
import colors from "../buttons/style";

const AuthenticationCard = () => {
  // false = login
  // true = register
  const [activeTab, setActiveTab] = useState(false);

  const size = useWindowDimensions();
  const boxSize = {
    height: `${size.height}px`,
    width: `${size.width}px`,
    "@media (min-width: 768px)": {
      height: "20rem",
      width: "25rem",
    },
  };
  return (
    <div style={boxSize}>
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
      <Logo />
      {!activeTab ? <Login /> : <Register />}
    </div>
  );
};

export default Radium(AuthenticationCard);
