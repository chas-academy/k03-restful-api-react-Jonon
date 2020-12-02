import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

// styles
import Styles from "./input.style";

const Input = (props) => {
  const { kind, rounded, width, placeholder, required, marginTop } = props;
  return (
    <>
      <input
        style={[
          Styles.base,
          Styles.kind[kind],
          Styles.rounded[rounded],
          { width, marginTop },
        ]}
        type=""
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

Input.propTypes = {
  kind: PropTypes.string.isRequired,
  rounded: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  marginTop: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};
export default Radium(Input);
