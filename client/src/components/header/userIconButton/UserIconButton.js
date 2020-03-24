import React, { useState } from "react";
import Icon from "../../icons/Icon";

// styles
import userIconButtonStyle from "./UserIconButtonStyle";

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
        onClick={props.modal}
      >
        <Icon icon={hover.onHover} color="primary" />
      </span>
    </div>
  );
};

export default UserIconButton;
