import React from "react";
import Radium from "radium";
import Icon from "./icon/Icon";

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
        <Icon icon={"typcn typcn-social-facebook"} />
        <Icon icon={"typcn typcn-social-twitter"} />
        <Icon icon={"typcn typcn-social-youtube"} />
        <Icon icon={"typcn typcn-social-vimeo"} />
      </div>
      <p style={[copyright, colors.color.primary]}>© ComicHaven 2019</p>
    </div>
  );
}

export default Radium(Footer);
