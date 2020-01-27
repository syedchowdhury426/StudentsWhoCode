import React from "react";

import DesktopHome from "../components/desktop/Home";
import MobileHome from "../components/mobile/Home";

import desktopBackgroundImage from "../resources/desktop-background-2.jpg";
import mobileBackgroundImage from "../resources/mobile-background.jpg";

const Home = props => {
  const homePageContainerStyles = {
    position: "relative",
    height: "100vh",
    backgroundImage:
      "url(" +
      (props.device === "desktop"
        ? desktopBackgroundImage
        : mobileBackgroundImage) +
      ")",
    backgroundSize: props.device === "desktop" ? "cover" : "100vw 100vh",
    position: "fixed",
    zIndex: -1,
    overflow: "scroll"
  };

  return (
    <div style={homePageContainerStyles}>
      {props.device === "desktop" ? <DesktopHome /> : <MobileHome />}
    </div>
  );
};

export default Home;
