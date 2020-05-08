import React from "react";
import Radium from "radium";
import Styles from "./style";
import Categories from "./categories/categories";

const Menu = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1", backgroundColor: "#FFFFFF" }}>
        <div style={[Styles.menuContainer]}>
          <div style={Styles.hiddenScrollbar}>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radium(Menu);
