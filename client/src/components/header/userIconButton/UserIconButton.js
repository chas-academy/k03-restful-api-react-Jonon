import React, { Component } from "react";
import Icon from "../icons/Icon";

// styles
import userIconButtonStyle from "./userIconButtonStyle";

class UserIconButton extends Component {
  render() {
    return (
      <div style={userIconButtonStyle}>
        <Icon icon={"typcn typcn-user-outline"} />
      </div>
    );
  }
}

export default UserIconButton;
