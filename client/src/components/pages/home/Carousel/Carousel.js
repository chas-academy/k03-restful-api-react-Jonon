import React, { Component } from "react";

import image1 from "./images/image1.png";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
// styles
import Radium from "radium";
import carouselStyle from "./carouselStyle";

const timeBetweenImages = 5000;

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [image1, image2, image3, image4, image5, image6],
      idx: 0,
      selected: {
        color: `white`
      },
      notSelected: {
        color: `rgba(256, 256, 256, 0.6)`
      }
    };
  }

  onClickChangeActiveImage = index => this.setState({ idx: index });

  componentDidMount() {
    setInterval(() => this.nextImage(), timeBetweenImages);
  }

  nextImage() {
    let current = this.state.idx;
    let next = ++current;

    if (next >= this.state.images.length) {
      next = 0;
    }

    this.setState({ idx: next });
  }

  render() {
    const { images } = this.state;

    const controller = images.map((control, index) => (
      <li
        key={index}
        onClick={this.onClickChangeActiveImage.bind(this, index)}
        style={[
          carouselStyle.bullet,
          this.state.idx !== index
            ? this.state.notSelected
            : this.state.selected
        ]}
      />
    ));

    return (
      <div style={carouselStyle.divContainer}>
        <div>
          <img
            src={this.state.images[this.state.idx]}
            style={carouselStyle.image}
            alt=""
          />
          <div style={carouselStyle.controller}>
            <ul style={carouselStyle.row}>{controller}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Carousel);
