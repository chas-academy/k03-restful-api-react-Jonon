import React from "react";
// styles
import dropDownMenuStyle from "./DropDownMenu.style";
// components

const DropDownMenu = ({ children }) => {
  return (
    <div style={dropDownMenuStyle.base}>
      <div style={dropDownMenuStyle.arrowAlignment}>
        <div style={dropDownMenuStyle.triangleUp}></div>
      </div>
      <div style={dropDownMenuStyle.box}>{children}</div>
    </div>
  );
};

export default DropDownMenu;
