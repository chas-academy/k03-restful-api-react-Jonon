import React, { useState, useEffect } from "react";

import "./style.css";
import style from "./styles";
import Radium from "radium";

const MobileList = props => {
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
      "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/756917/756917._SX1280_QL80_TTD_.jpg"
    ],
    posters: [],
    idx: 0
  });

  const sortIntoArray = () => {
    let posterImages = [...images.items];

    let size = 3;

    let posters = posterImages.slice(
      idx * size,
      (1 + idx) * size
    );

    setImages(currenState => ({
      ...currenState,
      posters
    }));
  };

  useEffect(() => {
    sortIntoArray();
  }, [images.idx]);

  const nextSlide = () => {
    let current = images.idx;
    console.log("current", current);
    let next = ++current;

    let posterLength = images.posters.length - 1;

    if (next > posterLength) {
      next = posterLength;
    }

    setImages(currentState => ({
      ...currentState,
      posters: currentState.posters,
      idx: next
    }));
  };

  const prevSlide = () => {
    let current = images.idx;
    console.log("current", current);
    let prev = --current;

    if (prev < 0) {
      prev = 0;
    }

    setImages(currentState => ({
      ...currentState,
      idx: prev
    }));
  };

  let { posters, idx } = images;

  console.log("idx", idx);
  let stringifyIdx = idx.toString();

  let poster = posters.map((item, index) => (
    <img src={item} alt="poster" style={style.poster} key={index} />
  ));

  return (
    <div style={style.container}>
      <div>
        <div>
          <h2 style={style.title}>Count: {images.idx}</h2>
        </div>
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
