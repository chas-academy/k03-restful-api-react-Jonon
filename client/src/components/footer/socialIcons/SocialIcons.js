import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";
// assets
import Icon from "../../../assets/icons";
// styles
import color from "../../../styles/colors";
import iconStyle from "./socialIcons.style.js";

const SocialIcons = () => {
  return (
    <>
      <div style={[iconStyle, iconStyle.align]}>
        <Icon icon="facebook" fill={{ fill: `${color.shades.grey01}` }} width="14" />
      </div>
      <div style={[iconStyle, iconStyle.align]}>
        <Icon icon="twitter" fill={{ fill: `${color.shades.grey01}` }} width="16" />
      </div>
      <div style={[iconStyle, iconStyle.align]}>
        <Icon
          icon="instagram"
          fill={{ fill: `${color.shades.grey01}` }}
          width="16"
        />
      </div>
      <div style={[iconStyle, iconStyle.align]}>
        <Icon icon="youtube" fill={{ fill: `${color.shades.grey01}` }} width="16" />
      </div>
    </>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Radium(SocialIcons);
