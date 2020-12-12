import React from "react";
import Radium from "radium";
// components
import SocialIcons from "./socialIcons/SocialIcons";
// styling
import colors from "../../styles/colors";
import footerStyle from "./footerStyle";

function Footer() {
  return (
    <div style={[footerStyle.styling, footerStyle.size, footerStyle.position]}>
      <div style={footerStyle.iconsContainer}>
        <SocialIcons />
      </div>
      <p style={[footerStyle.copyright, { color: colors.shades.white00 }]}>
        © ComicHaven 2019
      </p>
    </div>
  );
}

export default Radium(Footer);
