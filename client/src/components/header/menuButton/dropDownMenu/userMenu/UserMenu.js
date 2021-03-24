import React from "react";
import Radium from "radium";
// Assets
import Button from "../../../../../assets/buttons/Button";
// styles
import UserMenuStyle from "./UserMenu.style";
// components
import UserMenuItems from "./userMenuItems/UserMenuItems";

import { useDispatch } from "react-redux";

const UserMenu = () => {
  let dispatch = useDispatch();

  const checkToken = () => {
    // Check if token exist
    if (!localStorage.getItem("jwtToken")) {
      dispatch({ type: "NOT_AUTHENTICATED", payload: false });
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("jwtToken");
    checkToken();
  };
  return (
    <ul style={UserMenuStyle.box}>
      <div style={UserMenuStyle.list}>
        <UserMenuItems />
      </div>
      <Button
        title="Log out"
        kind="primary"
        width="100%"
        size="md"
        onClick={logoutUser}
      />
    </ul>
  );
};

export default Radium(UserMenu);
