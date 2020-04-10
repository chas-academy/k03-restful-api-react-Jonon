import React from "react";
import Radium from "radium";
import MobileList from "./list/MobileList";
import TabletList from "./list/TabletList";
import DesktopList from "./list/DesktopList";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const ReleasesList = () => {
  const dimensions = useWindowDimensions();

  let windowWidth = dimensions.width;
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  if (isMobile) {
    return <MobileList size={3} />;
  }
  if (isTablet) {
    return <MobileList size={4}  />;
  } else {
    return <MobileList size={5} />;
  }

};

export default Radium(ReleasesList);
