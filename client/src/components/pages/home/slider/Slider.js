import React, { Component } from "react";

import image1 from "./images/image1.png";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
// styles
import Radium, { StyleRoot } from "radium";
import sliderStyle from "./sliderStyle";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [image1, image2, image3],
      idx: 0
    };
  }

  changeImage = index => {
    this.setState({
      idx: (this.state.idx = index)
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        idx: this.state.idx + 1
      });
    }, 5000);
  }

  render() {
    const { images } = this.state;

    const controller = images.map((control, index) => (
      <li
        key={index}
        onClick={this.changeImage.bind(this, index)}
        style={sliderStyle.bullet}
      />
    ));

    return (
      <div style={sliderStyle.divContainer}>
        <div>
          <img
            src={this.state.images[this.state.idx]}
            style={sliderStyle.image}
          />
          <div style={sliderStyle.controller}>
            <ul style={sliderStyle.row}>{controller}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Slider);
