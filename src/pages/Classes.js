import React from "react";

import DesktopClasses from "../components/desktop/Classes";
import MobileClasses from "../components/mobile/Classes";

import desktopBackgroundImage from "../resources/desktop-background.jpg";
import mobileBackgroundImage from "../resources/mobile-background-2.png";

const Classes = props => {
  const classesPageContainerStyles = {
    position: "relative",
    height: "100vh",
    backgroundImage:
      "url(" +
      (props.device === "desktop"
        ? desktopBackgroundImage
        : mobileBackgroundImage) +
      ")",
    backgroundSize: props.device === "desktop" ? "cover" : "100vw 95vh",
    position: "fixed",
    zIndex: -1,
    overflow: "scroll"
  };

  return (
    <div id="classes" style={classesPageContainerStyles}>
      {props.device === "desktop" ? <DesktopClasses /> : <MobileClasses />}
    </div>
  );
};

export default Classes;
