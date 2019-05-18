import React, { Component } from "react";

import image1 from "./images/image1.png";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
// stylesjpg
import Radium, { StyleRoot } from "radium";
import sliderStyle from "./sliderStyle";

const images = [image1, image2, image3];

let list = [];

for (let i = 0; i < images.length; i++) {
  list.push(<li style={sliderStyle.bullet} />);
}

class Slider extends Component {
  state = {
    image: images[2]
  };

  render() {
    return (
      <div style={sliderStyle.divContainer}>
        <div>
          <img src={this.state.image} style={sliderStyle.image} />
          <div style={sliderStyle.controller}>
            <ul style={sliderStyle.row}>{list}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Slider);
