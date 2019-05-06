import React from "react";
import Radium from "radium";

import Facebook from "./icons/Facebook";
import Twitter from "./icons/Twitter";
import Vimeo from "./icons/Vimeo";
import YouTube from "./icons/YouTube";

const footer = {
  backgroundColor: "#303030",
  height: "100px",
  padding: "1rem",
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-around"
};

function Footer() {
  return (
    <div style={footer}>
      <Facebook />
      <Twitter />
      <Vimeo />
      <YouTube />
    </div>
  );
}

export default Radium(Footer);
