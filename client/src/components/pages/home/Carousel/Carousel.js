import React, { useState, useEffect } from "react";

import Radium from "radium";
import image1 from "./images/image1.png";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
// styles
import carouselStyle from "./carouselStyle";

const timeBetweenImages = 3000;

const Carousel = () => {
  const [carousel, setCarousel] = useState({
    images: [image1, image2, image3, image4, image5, image6],
    idx: 0,
    selected: {
      color: `white`,
    },
    notSelected: {
      color: `rgba(256, 256, 256, 0.6)`,
    },
  });

  const nextImage = () => {
    // const current = carousel.idx.length;
    // let next = carousel.idx++;

    /* if (next >= carousel.images.length) {
      next = 0;
    } */

    setCarousel((currentState) => {
      return {
        ...currentState,
        idx: carousel.idx + 1,
      };
    });

    // prevent subtract to prevent index from counting beyond the amount of images
    if (carousel.idx > carousel.images.length - 2) {
      setCarousel((currentState) => {
        return {
          ...currentState,
          idx: 0,
        };
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, timeBetweenImages);
    return () => {
      clearInterval(interval);
    };
  });

  const onClickChangeActiveImage = (index) =>
    setCarousel((currentState) => {
      return {
        ...currentState,
        idx: index,
      };
    });

  const controller = carousel.images.map((controller, index) => (
    <li
      onClick={() => onClickChangeActiveImage(index)}
      role="menuitem"
      aria-label="Change Active Image"
      onKeyDown={() => onClickChangeActiveImage(index)}
      key={controller}
      style={[
        carouselStyle.bullet,
        carousel.idx !== index ? carousel.notSelected : carousel.selected,
      ]}
    />
  ));

  return (
    <div style={carouselStyle.divContainer}>
      <div>
        <img
          src={carousel.images[carousel.idx]}
          style={carouselStyle.image}
          alt=""
        />
        <div style={carouselStyle.controller}>
          <ul style={carouselStyle.row}>{controller}</ul>
        </div>
      </div>
    </div>
  );
};

export default Radium(Carousel);
