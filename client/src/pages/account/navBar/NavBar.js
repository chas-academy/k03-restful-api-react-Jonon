import React, { useState } from "react";
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
  const toggleActive = (e) => {
    e.preventDefault();
    let id = e.currentTarget.id;
    setActive(id);
    // Set active to clicked item
  };

  const [active, setActive] = useState();

  return (
    <nav>
      <ul style={[navBarStyle.navBarContainer, navBarStyle.navBar]}>
        {navItems.map((navItem, index) => (
          <section
            value={7}
            id={index}
            onClick={toggleActive}
            key={navItem.id}
            style={[
              navBarStyle.navBarSection,
              active == navItem.id ? navBarStyle.navBarActive : null,
            ]}
          >
            <Icon icon={navItem.icon} width="1.5rem" />
            <li style={navBarStyle.navBarItemLi}>{navItem.name}</li>
          </section>
        ))}
      </ul>
    </nav>
  );
};

export default Radium(NavBar);
