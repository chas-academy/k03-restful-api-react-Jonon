import React from "react";
import Radium from "radium";
import { useSelector } from "react-redux";
// styles
import UserMenuItemsStyle from "./UserMenuItems.style";

const UserMenuItems = () => {
  let auth = useSelector((state) => state.authentication.auth);
  return (
    <>
      <li key="0" style={UserMenuItemsStyle}>
        Home
      </li>
      <li key="1" style={UserMenuItemsStyle}>
        Profile
      </li>
      {/* Hide Dashboard if not Admin */}
      {auth.role !== true ? null : (
        <li key="2" style={UserMenuItemsStyle}>
          Dashboard
        </li>
      )}
    </>
  );
};

export default Radium(UserMenuItems);
