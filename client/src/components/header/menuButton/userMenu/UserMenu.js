import React from "react";
// Assets
import Button from "../../../../assets/buttons/Button";
// styles
import UserMenuStyle from "./UserMenu.style";
// components
import UserMenuItems from "./userMenuItems/UserMenuItems";

const UserMenu = () => {
  return (
    <ul style={UserMenuStyle.box}>
      <div style={UserMenuStyle.list}>
        <UserMenuItems />
      </div>
      <Button title="Log out" kind="primary" width="100%" size="md" />
    </ul>
  );
};

export default UserMenu;
