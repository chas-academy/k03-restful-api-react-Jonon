import React, { Component } from "react";
import image1 from "./images/image1.png";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
// stylesjpg
import Radium, { StyleRoot } from "radium";
import sliderStyle from "./sliderStyle";

const images = [image1, image2, image3];

class Slider extends Component {
  state = {
    image: images[0]
  };

  render() {
    return (
      <div style={sliderStyle.imageContainer}>
        <img src={this.state.image} style={[sliderStyle.image]} />
      </div>
    );
  }
}

export default Radium(Slider);
