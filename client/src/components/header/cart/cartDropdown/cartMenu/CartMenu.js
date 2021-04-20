import React from "react";
// Components
import ProductList from "./productList/ProductList";
import CartTotal from "./cartTotal/CartTotal";
import CartButtons from "./cartButtons/CartButtons";

const CartMenu = () => {
  return (
    <div>
      <CartTotal />
      <ProductList />
      <CartButtons />
    </div>
  );
};

export default CartMenu;
