import React, { Component } from "react";
import Radium from "radium";
import colors from "../../styles/colors";
import { connect } from "react-redux";
import {show_menu} from '../../../actions/menuActions'

const HamburgerMenu = (props) => {
  return (
    <div  >
      <ion-icon 
        style={[colors.color.secondary, { cursor: "pointer" }]}
        size="large"
        name="menu"
        onClick={props.show_menu}
      />
    </div>
  );
};


const mapDispatchToProps = dispatch => {
  return{
    show_menu: () => {dispatch(show_menu)}
  }
}


export default connect(null, mapDispatchToProps)(Radium(HamburgerMenu))
