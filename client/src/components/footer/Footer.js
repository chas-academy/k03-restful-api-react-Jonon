import React from "react";
import Radium from "radium";
import Icon from "./icon/Icon";

// styling
import colors from "../../styles/colors";
import footerStyle from "./footerStyle";

function Footer() {
  return (
    <div style={[footerStyle.styling, footerStyle.size, footerStyle.position]}>
      <div style={footerStyle.rowEvenly}>
        <Icon icon="typcn typcn-social-facebook" />
        <Icon icon="typcn typcn-social-twitter" />
        <Icon icon="typcn typcn-social-pinterest" />
        <Icon icon="typcn typcn-social-vimeo" />
      </div>
      <p style={[footerStyle.copyright, colors.color.primary]}>© ComicHaven 2019</p>
    </div>
  );
}

export default Radium(Footer);
