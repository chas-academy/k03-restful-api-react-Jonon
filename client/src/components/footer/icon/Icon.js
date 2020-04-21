import React from "react";
import "typicons.font";
import PropTypes from "prop-types";

import Radium from "radium";
import iconStyle from "./iconsStyle";

const Icon = ({ icon }) => {
  return (
    <div style={iconStyle}>
      <span className={icon} style={iconStyle.align} />
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Radium(Icon);
