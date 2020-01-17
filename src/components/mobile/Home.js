import React from "react";

import Header from "../mobile/Header";

import homePageBackgroundImage from "../../resources/mobile-background.jpg";

const Home = props => {
  console.log("home");
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

export default Home;
