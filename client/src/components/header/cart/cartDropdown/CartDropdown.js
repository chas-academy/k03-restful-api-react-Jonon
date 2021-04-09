import React from "react";
import Radium from "radium";
import CartMenu from "./cartMenu/CartMenu";

//styles
import CartDropdownStyle from "./CartDropdown.style";

const CartDropdown = () => {
  return (
    <div>
      <div style={CartDropdownStyle.base}>
        <div style={CartDropdownStyle.arrowAlignment}>
          <div style={CartDropdownStyle.triangleUp}></div>
        </div>
        <div style={CartDropdownStyle.box}>
          <CartMenu />
        </div>
      </div>
    </div>
  );
};

export default Radium(CartDropdown);
