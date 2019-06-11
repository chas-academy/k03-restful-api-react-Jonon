import React, { Component } from "react";
import Slider from "./slider/Slider";
import ReleasesList from "./releasesList/ReleasesList";

class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <ReleasesList />
      </div>
    );
  }
}

export default Home;
