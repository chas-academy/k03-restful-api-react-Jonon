import React from "react";
import Radium from "radium";
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
      <ul style={[navBarStyle.navBarContainer, navBarStyle.navBar]}>
        {navItems.map((navItem) => (
          <section style={navBarStyle.navBarSection}>
            <Icon icon={navItem.icon} width="1.5rem" />
            <li style={navBarStyle.navBarItemLi} key={navItem.id}>
              {navItem.name}
            </li>
          </section>
        ))}
      </ul>
    </nav>
  );
};

export default Radium(NavBar);
