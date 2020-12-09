import React from "react";
import { Cart, User, UserOutline, Logo } from "./icons";

const Icon = ({ width, height, icon }) => {
  switch (icon.toLowerCase()) {
    case "cart":
      return <Cart width={width} height={height} />;
    case "user":
      return <User width={width} height={height} />;
    case "useroutline":
      return <UserOutline width={width} height={height} />;
    case "logo":
      return <Logo width={width} height={height} />;
    default:
      return "No icon detected";
  }
};

export default Icon;
