import React from "react";

import DesktopContact from "../components/desktop/ContactUs";
import MobileContact from "../components/mobile/ContactUs2";

import desktopBackgroundImage from "../resources/desktop-background-2.jpg";
import mobileBackgroundImage from "../resources/mobile-background.jpg";

const ContactUs = props => {

  const contactPageContainerStyles = {
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
    <div id="contact" style={contactPageContainerStyles}>
      {props.device === "desktop" ? <DesktopContact /> : <MobileContact />}
    </div>
  );
};

export default ContactUs;
