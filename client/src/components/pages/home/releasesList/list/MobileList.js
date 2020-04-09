import React, { useState, useEffect } from "react";

import "./style.css";
import style from "./styles";
import Radium from "radium";

const MobileList = (props) => {
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
    ],
    posters: [],
    idx: 0,
  });

   let size = 3;
 
  const sortIntoArray = () => {
    // copy state
    let posterImages = [...images.items];

    // slice array by 3
    let posters = posterImages.slice(
      images.idx * size,
      (1 + images.idx) * size
    );

    setImages((currenState) => ({
      ...currenState,
      posters,
    }));
  };

  useEffect(() => {
    sortIntoArray();
  }, [images.idx]);

  const nextSlide = () => {
    let current = images.idx;
    let next = ++current;

    // Prevent increment to exceed total groups of images
    let posterLength = Math.ceil(images.items.length / size) - 1;

    if (next > posterLength) {
      next = posterLength;
    }

    setImages((currentState) => {
      return {
        ...currentState,
        idx: next,
      };
    });
  };

  const prevSlide = () => {
    let current = images.idx;
    let prev = --current;

    if (prev < 0) {
      prev = 0;
    }

    setImages((currentState) => {
      return {
        ...currentState,
        idx: prev,
      };
    });
  };

  let { posters } = images;

  let poster = posters.map((item, index) => (
    <img src={item} alt="poster" style={style.poster} key={index} />
  ));

  return (
    <div style={style.container}>
      <div>
        <h2 style={style.title}>New Releases</h2>
        <div style={[style.posterContainer]}>
          <div style={style.posterList} className="posterlist">
            {poster}
          </div>
          <div style={style.buttons}>
            <span
              className="typcn typcn-chevron-left"
              key="btn + 1"
              style={[style.slideButton, style.prevSlide]}
              onClick={prevSlide}
            />
            <span
              className="typcn typcn-chevron-right"
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

export default Radium(MobileList);
