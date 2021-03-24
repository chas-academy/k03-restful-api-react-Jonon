import React from "react";
import Radium from "radium";
// styles
import dropDownMenuStyle from "./DropDownMenu.style";
// components
import UserMenu from "./userMenu/UserMenu";

const DropDownMenu = () => {
  return (
    <div style={dropDownMenuStyle.base}>
      <div style={dropDownMenuStyle.arrowAlignment}>
        <div style={dropDownMenuStyle.triangleUp}></div>
      </div>
      <div style={dropDownMenuStyle.box}>
        <UserMenu />
      </div>
    </div>
  );
};

export default Radium(DropDownMenu);
