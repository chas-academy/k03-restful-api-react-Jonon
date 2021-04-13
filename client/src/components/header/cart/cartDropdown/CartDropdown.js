import React from "react";
import Radium from "radium";
import CartMenu from "./cartMenu/CartMenu";
import { useSelector } from "react-redux";

//styles
import CartDropdownStyle from "./CartDropdown.style";

const CartDropdown = () => {
  let cart = useSelector((state) => state.cartMenu.payload);

  return (
    <div>
      <div
        style={[
          CartDropdownStyle.base,
          cart === true ? CartDropdownStyle.active : CartDropdownStyle.notActive,
        ]}
      >
        <div style={CartDropdownStyle.arrowAlignment}>
          <div style={CartDropdownStyle.triangleUp}></div>
        </div>
        <div style={CartDropdownStyle.box}>
          <CartMenu />
        </div>
      </div>
      {cart === true ? <div style={CartDropdownStyle.backdrop}></div> : null}
    </div>
  );
};

export default Radium(CartDropdown);
