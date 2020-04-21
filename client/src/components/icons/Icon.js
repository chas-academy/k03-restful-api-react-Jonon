import React from "react";
import "typicons.font";
import PropTypes from "prop-types";

// styles
import Radium from "radium";
import colors from "../styles/colors";
import iconStyle from "./iconsStyle";

const Icon = ({ color, icon }) => {
  return <span style={[iconStyle, colors.color[color]]} className={icon} />;
};

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Radium(Icon);
