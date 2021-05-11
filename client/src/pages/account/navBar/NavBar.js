import React from "react";
// styles
import navBarStyle from "./NavBar.style";
//Assets
import Icon from "../../../assets/icons/";

const navItems = [
  { id: 0, name: "Edit account", icon: "cog" },
  { id: 1, name: "My orders", icon: "cart" },
  { id: 2, name: "Favourites", icon: "star" },
];

const NavBar = () => {
  return (
    <nav>
      <ul>
        {navItems.map((navItem) => (
          <>
            <li key={navItem.id}>{navItem.name}</li>
            <Icon icon={navItem.icon} width="1.5rem" />
          </>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
