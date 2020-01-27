import React from "react";

import DesktopHome from "../components/desktop/Home";
import MobileHome from "../components/mobile/Home";

import desktopBackgroundImage from "../resources/desktop-background-2.jpg";
import mobileBackgroundImage from "../resources/mobile-background.jpg";

const Home = props => {
  const homePageContainerStyles = {
    position: "relative",
    height: "100%",
    backgroundImage:
      "url(" +
      (props.device === "desktop"
        ? desktopBackgroundImage
        : mobileBackgroundImage) +
      ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    flex: 1
  };

  return (
    <div style={homePageContainerStyles}>
      {props.device === "desktop" ? <DesktopHome /> : <MobileHome />}
    </div>
  );
};

export default Home;
