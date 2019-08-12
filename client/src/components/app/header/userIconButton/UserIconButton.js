import React, { Component } from "react";
import Icon from "../../icons/Icon";

// styles
import userIconButtonStyle from "./UserIconButtonStyle";

class UserIconButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: "typcn typcn-user-outline",
    }
  }

  handleMouseEnter = () => {
    this.setState({onHover: "typcn typcn-user"})
    
  };

  handleMouseLeave = () => {
    this.setState({onHover: "typcn typcn-user-outline"})
  }

  
  render() {
    console.log(this.state.modalIsOpen)
    let {modalIsOpen} = this.state;

    return (
        <div style={userIconButtonStyle}>
          <span onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} onClick={this.props.modal}>
            <Icon icon={this.state.onHover} />
        </span>
        
    </div>
      
    );
  }
}

export default UserIconButton;
