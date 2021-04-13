import React from "react";
import {
  Cart,
  Search,
  Close,
  User,
  UserOutline,
  Logo,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Menu,
  Star,
  Add,
} from "./icons";

const Icon = ({ width, height, icon, fill, stroke, customStyle }) => {
  switch (icon.toLowerCase()) {
    case "cart":
      return (
        <Cart width={width} height={height} fill={fill} customStyle={customStyle} />
      );
    case "search":
      return (
        <Search
          width={width}
          height={height}
          stroke={stroke}
          customStyle={customStyle}
        />
      );
    case "close":
      return (
        <Close width={width} height={height} fill={fill} customStyle={customStyle} />
      );
    case "user":
      return (
        <User width={width} height={height} fill={fill} customStyle={customStyle} />
      );
    case "useroutline":
      return (
        <UserOutline
          width={width}
          height={height}
          fill={fill}
          customStyle={customStyle}
        />
      );
    case "logo":
      return (
        <Logo width={width} height={height} fill={fill} customStyle={customStyle} />
      );
    case "chevronright":
      return (
        <ChevronRight
          width={width}
          height={height}
          fill={fill}
          customStyle={customStyle}
        />
      );
    case "facebook":
      return (
        <Facebook
          width={width}
          height={height}
          fill={fill}
          customStyle={customStyle}
        />
      );
    case "twitter":
      return (
        <Twitter
          width={width}
          height={height}
          fill={fill}
          customStyle={customStyle}
        />
      );
    case "instagram":
      return (
        <Instagram
          width={width}
          height={height}
          fill={fill}
          customStyle={customStyle}
        />
      );
    case "youtube":
      return (
        <YouTube
          width={width}
          height={height}
          fill={fill}
          customStyle={customStyle}
        />
      );
    case "menu":
      return (
        <Menu width={width} height={height} fill={fill} customStyle={customStyle} />
      );
    case "star":
      return <Star width={width} height={height} fill={fill} />;
    case "add":
      return (
        <Add width={width} height={height} fill={fill} customStyle={customStyle} />
      );
  }
};

export default Icon;
