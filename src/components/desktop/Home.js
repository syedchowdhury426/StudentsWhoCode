import React from "react";

import Header from "../desktop/Header";

import homePageBackgroundImage from "../../resources/desktop-background.jpg";

const Home = props => {
  return (
    <div style={homePageContainerStyles}>
      <Header navBarSelection="home" />
    </div>
  );
};

const homePageContainerStyles = {
  height: "100vh",
  width: "100vw",
  backgroundImage: "url(" + homePageBackgroundImage + ")",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat"
};

export default Home;
