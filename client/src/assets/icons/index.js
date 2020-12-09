import React from "react";
import {
  Cart,
  User,
  UserOutline,
  Logo,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
} from "./icons";

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
    case "chevronright":
      return <ChevronRight width={width} height={height} />;
    case "facebook":
      return <Facebook width={width} height={height} />;
    case "twitter":
      return <Twitter width={width} height={height} />;
    case "instagram":
      return <Instagram width={width} height={height} />;
    case "youtube":
      return <YouTube width={width} height={height} />;
  }
};

export default Icon;
