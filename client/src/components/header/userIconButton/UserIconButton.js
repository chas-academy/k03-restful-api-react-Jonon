import React, { useState } from "react";
import Icon from "../../icons/Icon";

// styles
import userIconButtonStyle from "./UserIconButtonStyle";
import { connect } from "react-redux";
import { show_modal } from "../../../actions/modalActions";

const UserIconButton = props => {
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
        onClick={props.show_modal}
      >
        <Icon icon={hover.onHover} color="primary" />
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    show_modal: () => dispatch(show_modal)
  }
}

export default connect(null, mapDispatchToProps)(UserIconButton)
