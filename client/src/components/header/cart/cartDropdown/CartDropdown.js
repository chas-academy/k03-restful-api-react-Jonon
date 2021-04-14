import React from "react";
import Radium from "radium";
import CartMenu from "./cartMenu/CartMenu";
import { useSelector, useDispatch } from "react-redux";

//styles
import CartDropdownStyle from "./CartDropdown.style";

const CartDropdown = () => {
  let cart = useSelector((state) => state.cartMenu.payload);

  let auth = useSelector((state) => state.authentication.auth);

  let dispatch = useDispatch();

  const showCart = () => {
    dispatch({ type: "HIDE_CART", payload: false });
  };

  console.log(cart);
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
      {cart === true ? (
        <div style={CartDropdownStyle.backdrop} onClick={showCart}></div>
      ) : null}
    </div>
  );
};

export default Radium(CartDropdown);
