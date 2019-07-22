import React, { Component } from "react";
import Icon from "../icons/Icon";

// styles
import userIconButtonStyle from "./UserIconButtonStyle";

class UserIconButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: "typcn typcn-user-outline"
    }
  }

  handleMouseEnter = () => {
    console.log("enter")
    this.setState({onHover: "typcn typcn-user"})
    
  };

  handleMouseLeave = () => {
    console.log("leave")
    this.setState({onHover: "typcn typcn-user-outline"})
  }
  
  render() {
    return (
        <div style={userIconButtonStyle}>
          <span onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}>
            <Icon icon={this.state.onHover} />
        </span>
    </div>
      
    );
  }
}

export default UserIconButton;
