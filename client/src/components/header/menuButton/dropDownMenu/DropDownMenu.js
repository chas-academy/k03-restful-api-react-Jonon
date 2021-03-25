import React from "react";
import Radium from "radium";
import { useSelector, useDispatch } from "react-redux";
// styles
import dropDownMenuStyle from "./DropDownMenu.style";
// components
import UserMenu from "./userMenu/UserMenu";

const DropDownMenu = () => {
  let UserDropDownMenu = useSelector((state) => state.dropDownMenu.payload);

  let dispatch = useDispatch();

  const hideUserDropDown = () => {
    dispatch({ type: "HIDE", payload: false });
  };

  return (
    <div>
      <div
        style={[
          dropDownMenuStyle.base,
          UserDropDownMenu === true
            ? dropDownMenuStyle.active
            : dropDownMenuStyle.notActive,
        ]}
      >
        <div style={dropDownMenuStyle.arrowAlignment}>
          <div style={dropDownMenuStyle.triangleUp}></div>
        </div>
        <div style={dropDownMenuStyle.box}>
          <UserMenu />
        </div>
      </div>
      {UserDropDownMenu === true ? (
        <div style={[dropDownMenuStyle.backdrop]} onClick={hideUserDropDown}></div>
      ) : null}
    </div>
  );
};

export default Radium(DropDownMenu);
