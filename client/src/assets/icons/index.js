import React from "react";
import { Cart, User, UserOutline } from "./icons";

const Icon = ({ width, height, icon }) => {
  switch (icon.toLowerCase()) {
    case "cart":
      return <Cart width={width} height={height} />;
    case "user":
      return <User width={width} height={height} />;
    case "useroutline":
      return <UserOutline width={width} height={height} />;
  }
};

export default Icon;
