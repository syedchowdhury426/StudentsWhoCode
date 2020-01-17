import React from "react";

import Header from "./Header";

import homePageBackgroundImage from "../../resources/mobile-background.jpg";

const ContactUs = props => {
  console.log("contact");
  return (
    <div style={homePageContainerStyles}>
      <Header />
    </div>
  );
};

const homePageContainerStyles = {
  height: "100vh",
  backgroundImage: "url(" + homePageBackgroundImage + ")",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};

export default ContactUs;
