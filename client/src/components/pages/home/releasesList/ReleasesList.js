import React from "react";
import Radium from "radium";
import Slider from "./list/Slider";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const ReleasesList = () => {
  const dimensions = useWindowDimensions();

  const windowWidth = dimensions.width;
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  if (isMobile) {
    return <Slider size={3} />;
  }
  if (isTablet) {
    return <Slider size={4} />;
  }
  return <Slider size={5} />;
};

export default Radium(ReleasesList);
