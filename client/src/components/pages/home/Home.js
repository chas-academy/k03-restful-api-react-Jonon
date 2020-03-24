import React, { Component } from "react";
import Slider from "./slider/Slider";
import ReleasesList from "./releasesList/ReleasesList";
import Modal from "../../modal/modal";

class Home extends Component {
  render() {
    console.log(this.props.hideModal);
    return (
      <div>
        <Modal show={this.props.show} outside={this.props.outside} />
        <Slider />
        <ReleasesList />
      </div>
    );
  }
}

export default Home;
