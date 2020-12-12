import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// assets
import Icon from "../../../assets/icons";
// styles
import userIconButtonStyle from "./UserIconButtonStyle";
import { show_modal } from "../../../actions/modalActions";

const UserIconButton = ({ show_modal }) => {
  const [hover, setHover] = useState({ onHover: "useroutline" });

  const handleMouseEnter = () => {
    setHover({ onHover: "user" });
  };

  const handleMouseLeave = () => {
    setHover({ onHover: "useroutline" });
  };

  return (
    <div style={userIconButtonStyle}>
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={show_modal}
        onKeyDown={show_modal}
        role="button"
        tabIndex={0}
      >
        <Icon
          icon={hover.onHover}
          fill="secondary"
          width="24"
          customStyle={{ display: "flex", alignItems: "center" }}
        />
      </span>
    </div>
  );
};

UserIconButton.propTypes = {
  show_modal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    show_modal: () => dispatch(show_modal),
  };
};

export default connect(null, mapDispatchToProps)(UserIconButton);
