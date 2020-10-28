import React, { useState } from "react";
import PropTypes from "prop-types";

import "./style.css";
import Radium from "radium";
import style from "./styles";

const Slider = (props) => {
  const { size } = props;
  const [images, setImages] = useState({
    items: [
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/765356/765356._SX1280_QL80_TTD_.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/232863/232863._SX1280_QL80_TTD_.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/779028/779028._SX1280_QL80_TTD_.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/765281/765281._SX1280_QL80_TTD_.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/495991/495991._SX1280_QL80_TTD_.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/694446/694446._SX1280_QL80_TTD_.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/460929/460929._SX1280_QL80_TTD_.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/755543/755543._SX1280_QL80_TTD_.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/756917/756917._SX1280_QL80_TTD_.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/818279/818279._SX1280_QL80_TTD_.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/290729/290729._SX1280_QL80_TTD_.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/813814/813814._SX1280_QL80_TTD_.jpg",
    ],
    index: 0,
  });

  const nextSlide = () => {
    if (images.index < images.items.length - size) {
      setImages((currentState) => {
        return {
          ...currentState,
          index: currentState.index + size,
        };
      });
    }
  };

  const prevSlide = () => {
    if (images.index > 0) {
      setImages((currentState) => {
        return {
          ...currentState,
          index: currentState.index - size,
        };
      });
    }
  };

  const { index, items } = images;

  const imageSet = items
    .slice(index, index + size)
    // Slicing correct number of items by first taking the index and then the size we get from prop.size.
    .map((url) => {
      return <img src={url} style={style.poster} alt="poster" key={url + index} />;
    });

  return (
    <div style={style.container}>
      <div>
        <h2 style={style.title}>New Releases</h2>
        <div style={[style.posterContainer]}>
          <div style={style.posterList} className="posterlist">
            {imageSet}
          </div>
          <div style={style.buttons}>
            <span
              className="typcn typcn-chevron-left"
              role="button"
              onKeyDown={prevSlide}
              tabIndex={0}
              aria-label="Previous slide"
              key="btn + 1"
              style={[style.slideButton, style.prevSlide]}
              onClick={prevSlide}
            />
            <span
              className="typcn typcn-chevron-right"
              role="button"
              onKeyDown={nextSlide}
              tabIndex={0}
              aria-label="Next slide"
              key="btn + 2"
              style={[style.slideButton, style.nextSlide]}
              onClick={nextSlide}
            />
          </div>
        </div>
        <h3 style={style.viewMoreLink}>View More</h3>
      </div>
    </div>
  );
};

Slider.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Radium(Slider);
