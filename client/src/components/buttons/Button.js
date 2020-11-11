import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import styles from "./style";

const Button = (props) => {
  const {
    type,
    onClick,
    kind,
    size,
    width,
    fontFamily,
    fontSize,
    marginTop,
    title,
  } = props;
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type={type}
      onClick={() => onClick()}
      style={[
        styles.base,
        styles[kind],
        styles.size[size],
        {
          width,
          fontFamily,
          fontSize,
          marginTop,
        },
      ]}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  fontFamily: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  marginTop: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Radium(Button);
