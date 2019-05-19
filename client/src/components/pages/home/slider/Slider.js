import React, { Component } from "react";

import image1 from "./images/image1.png";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
// stylesjpg
import Radium, { StyleRoot } from "radium";
import sliderStyle from "./sliderStyle";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        {
          id: 1,
          image: image1,
          active: true
        },
        {
          id: 2,
          image: image2,
          active: false
        },
        {
          id: 3,
          image: image3,
          active: false
        }
      ]
    };
  }

  render() {
    const { images } = this.state;
    let activeImages = images.filter(data => data.active == true);
    const activeImage = activeImages.map(data => data.image);

    return (
      <div style={sliderStyle.divContainer}>
        <div>
          <img src={activeImage} style={sliderStyle.image} />
          <div style={sliderStyle.controller}>
            <ul style={sliderStyle.row}>
              {images.map((image, id, active) => {
                return (
                  <li
                    key={id}
                    id={id}
                    active={active}
                    style={sliderStyle.bullet}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Slider);
