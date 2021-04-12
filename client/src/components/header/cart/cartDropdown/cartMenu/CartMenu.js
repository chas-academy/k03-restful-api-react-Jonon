import React from "react";
// Components
import ProductList from "./productList/ProductList";
import CartTotal from "./cartTotal/CartTotal";

const CartMenu = () => {
  return (
    <div>
      <ProductList />
      <CartTotal />
    </div>
  );
};

export default CartMenu;
