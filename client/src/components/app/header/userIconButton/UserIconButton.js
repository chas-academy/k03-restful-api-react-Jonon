import React, { Component } from "react";
import Icon from "../icons/Icon";

// styles
import userIconButtonStyle from "./UserIconButtonStyle";

class UserIconButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: "typcn typcn-user-outline",
      modalIsOpen: false
    }
  }

  handleMouseEnter = () => {
    this.setState({onHover: "typcn typcn-user"})
    
  };

  handleMouseLeave = () => {
    this.setState({onHover: "typcn typcn-user-outline"})
  }

  ShowModal = () => {
    this.setState({modalIsOpen: true})
  }
  
  render() {
    console.log(this.state.modalIsOpen)
    let {modalIsOpen} = this.state;

    const isModal = modalIsOpen == true;

    if (isModal) {
      return (
          <p>hej</p>
        );
  }

    return (
        <div style={userIconButtonStyle}>
          <span onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} onClick={this.ShowModal.bind(this)}>
            <Icon icon={this.state.onHover} />
        </span>
    </div>
      
    );
  }
}

export default UserIconButton;
