import React from "react";
import Radium from "radium";
import SocialIcon from "./socialIcon/SocialIcon";

import colors from "../../styles/colors";

const footer = {
  size: {
    height: "100px",
    padding: "1rem"
  },
  position: {
    display: "flex",
    flexDirection: "column"
  },
  backgroundColor: "#303030",
  textAlign: "center"
};

const copyright = {
  display: "inline-block"
};

const flextest = {
  display: "flex",
  justifyContent: "space-evenly"
};

function Footer() {
  return (
    <div style={[footer, footer.size, footer.position]}>
      <div style={flextest}>
        <SocialIcon icon={"typcn typcn-social-facebook"} />
        <SocialIcon icon={"typcn typcn-social-twitter"} />
        <SocialIcon icon={"typcn typcn-social-youtube"} />
        <SocialIcon icon={"typcn typcn-social-vimeo"} />
      </div>
      <p style={[copyright, colors.color.primary]}>© ComicHaven 2019</p>
    </div>
  );
}

export default Radium(Footer);
