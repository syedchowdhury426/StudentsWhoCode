import React from "react";

import Header from "../desktop/Header";

import homePageBackgroundImage from "../../resources/desktop-background-2.jpg";

const Home = props => {
  return (
    <div style={homePageContainerStyles}>
      <Header navBarSelection="home" />
      <p style={title}>STUDENTS WHO CODE</p>
      <p style={introText}>
        We are an after school program committed to inspring a passion for
        coding in students from an early age
      </p>
      <div style={whatAreWeContainer}></div>
      <div style={whoAreWeContainer}></div>
      <div style={socialMediaContainer}></div>
    </div>
  );
};

const homePageContainerStyles = {
  position: "relative",
  height: "100%",
  backgroundImage: "url(" + homePageBackgroundImage + ")",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed"
};

const title = {
  paddingTop: "30vh",
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
  fontFamily: "futura",
  fontSize: "3vw"
};

const introText = {
  textAlign: "center",
  fontFamily: "roboto",
  border: "2px solid black",
  borderRadius: "25px",
  marginLeft: "30vw",
  marginRight: "30vw"
};

const whatAreWeContainer = {};

const whoAreWeContainer = {};

const socialMediaContainer = {};

export default Home;
