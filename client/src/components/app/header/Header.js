import React, { Component } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";
import UserIconButton from "./userIconButton/UserIconButton";
import Cart from "./cart/Cart";
import Menu from "../Menu/Menu";

// styles
import Radium from "radium";
import styles from "./headerStyle";
import colors from "../styles/colors";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state= {
      show: false
    }
  }

  showDropdown = () => {
    this.setState({
      show: true
    })
  }
  

  // hide modal if click outside
  componentWillMount() {
    document.addEventListener("click", this.handleClick, false);
  }

  componentWillUnmount() {
    document.addEventListener("click", this.handleClick, false);
  }

  handleClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.setState({ show: false });
  };

  render() {
   
    return (
      <div >
        <nav
          style={[
            styles.layout.flex,
            styles.base,
            colors.backgroundcolor.primary
          ]}
        >
          <div style={{marginLeft: "1rem"}}>
            <HamburgerMenu showMenu={this.showDropdown.bind()} />
          </div>

          <Link to={"/"}>
            <h1 style={[styles.title, colors.color.primary]}>ComicHaven</h1>
          </Link>

          <div style={[styles.layout.flex, { marginRight: "1rem"}]}>
            <UserIconButton modal={this.props.showModal} />
            <Cart />
          </div>
        </nav>
        {/* push nav */}
        <div style={{ marginTop: "2.5rem" }} />
        <Menu show={this.state.show}  
        outside={node => (this.node = node)}/>
      </div>
    );
  }
}

export default Radium(Header);
