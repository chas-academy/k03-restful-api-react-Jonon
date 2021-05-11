import React from "react";

//Assets
import Icon from "../../../assets/icons/icons";

const navItems = [
  { id: 0, name: "Edit account" },
  { id: 1, name: "My orders" },
  { id: 2, name: "Favourites" },
];

const NavBar = () => {
  return (
    <nav>
      <ul>
        {navItems.map((navItem) => (
          <li key={navItem.id}>{navItem.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
