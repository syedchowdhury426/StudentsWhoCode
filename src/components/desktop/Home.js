import React from "react";

import Header from "../desktop/Header";

import homePageBackgroundImage from "../../resources/desktop-background-2.jpg";

const Home = props => {
  return (
    <div style={homePageContainerStyles}>
      <Header navBarSelection="home" />
    </div>
  );
};

const homePageContainerStyles = {
  height: "100vh",
  backgroundImage: "url(" + homePageBackgroundImage + ")",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};

export default Home;
