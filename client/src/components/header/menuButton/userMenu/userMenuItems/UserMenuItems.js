import React from "react";
import Radium from "radium";
// styles
import UserMenuItemsStyle from "./UserMenuItems.style";

const UserMenuItems = () => {
  return (
    <>
      <li key="0" style={UserMenuItemsStyle}>
        Home
      </li>
      <li key="1" style={UserMenuItemsStyle}>
        Profile
      </li>
      <li key="2" style={UserMenuItemsStyle}>
        Dashboard
      </li>
    </>
  );
};

export default Radium(UserMenuItems);
