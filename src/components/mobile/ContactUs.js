import React from "react";
import Mailto from 'react-protected-mailto';

import Header from "./Header";

import homePageBackgroundImage from "../../resources/mobile-background.jpg";

const ContactUs = props => {
  console.log("contact");
  return (
    <div style={homePageContainerStyles}>
      <Header />
      return(
        <div style={imageContainer}>
          <p style={centerText}>
            Email: <Mailto
              email='idrees@studentswhocode.com'
              headers={
                {subject:'Question from the website'},
                {cc:''}
              }/>
          </p>
        </div>
      )
    </div>
  );
};

const imageContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxHeight: window.innerHeight,
  overflow: "hidden"
};

const centerText = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  backgroundColor: "black",
  borderRadius: "10% / 50%",
  fontSize: "1.5em",
  padding: "5vmin"
};

const homePageContainerStyles = {
  height: "100vh",
  backgroundImage: "url(" + homePageBackgroundImage + ")",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};

export default ContactUs;
