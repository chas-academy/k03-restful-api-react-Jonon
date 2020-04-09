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
    return <MobileList />;
  }
  if (isTablet) {
    return <TabletList  />;
  } else {
    return <DesktopList />;
  }

};

export default Radium(ReleasesList);
