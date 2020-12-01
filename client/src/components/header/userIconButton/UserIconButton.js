import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Icon from "../../icons/Icon";

// styles
import userIconButtonStyle from "./UserIconButtonStyle";
import { show_modal } from "../../../actions/modalActions";

const UserIconButton = ({ show_modal }) => {
  const [hover, setHover] = useState({ onHover: "typcn typcn-user-outline" });

  const handleMouseEnter = () => {
    setHover({ onHover: "typcn typcn-user" });
  };

  const handleMouseLeave = () => {
    setHover({ onHover: "typcn typcn-user-outline" });
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
        <Icon icon={hover.onHover} color="variant00" />
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
