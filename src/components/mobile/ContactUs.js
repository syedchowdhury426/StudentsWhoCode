import React from "react";
import Mailto from 'react-protected-mailto';
import Header from "./Header";

import facebookIcon from "../../resources/facebook.png";
import instragramIcon from "../../resources/instagram.png";
import linkedinIcon from "../../resources/linkedin.png";

import homePageBackgroundImage from "../../resources/mobile-background.jpg";

const ContactUs = props => {
  console.log("contact");
  return (
    <div style={divStyle}>

      <Header navBarSelection="contact"/>

        <p style={mainHeaderText}>Contact Us</p>

        <div style={containerStyles}>
          <p style={bodyStyle}>
            Email: <Mailto
              email='team@studentswhocode.com'
              headers={
                {subject:'Question from the website'},
                {cc:''}
              }/>
          </p>
        </div>

        <div style={socialMediaContainer}>
          <span>
            <img style={leftsocialIconStyle} src={linkedinIcon} />
            <img style={socialIconStyle} src={instragramIcon} />
            <img style={rightsocialIconStyle} src={facebookIcon} />
          </span>
        </div>
    </div>
  );
};

const divStyle ={
  width:"100vw"
}

const imageContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxHeight: window.innerHeight,
  overflow: "hidden"
};

const containerStyles = {
    //alignItems: 'center',
    //justifyContent: 'center',
    textAlign: "center",
    borderRadius: "20px",
    marginTop: "10%",
    paddingTop: "10vh",
    paddingBottom: "2vh",
    width: "40%",
    background: "#FFFFFF",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)"
}

const centerText = {
  //position: "absolute",
  //top: "40%",
  //left: "50%",
  //transform: "translate(-50%, -50%)",
  color: "black",
  //backgroundColor: "black",
  borderRadius: "10% / 50%",
  fontSize: "1.5em",
  padding: "5vmin"
};

const mainHeaderText = {
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
  fontFamily: "Palanquin Dark, sans-serif",
  fontSize: "6vw",
  paddingTop: "15vh"
};

const bodyStyle = {
  marginTop: "4vh",
  fontFamily: "roboto",
  borderRadius: "20px",
  backgroundColor: "#5ED1EC",
  color: "#033665",
  fontSize: "2vh",
  marginLeft: "10vw",
  marginRight: "10vw",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "10px",
  paddingRight: "5px",
  lineHeight: 2
};

const socialMediaContainer = {
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100vw",
  backgroundColor: "#5ED1EC",
  textAlign: "center",
  height: "5vh"
};

const socialIconStyle = {
  width: "5vh",
  marginLeft: "10px",
  marginRight: "10px"
};

const leftsocialIconStyle = {
  width: "5vh"
};

const rightsocialIconStyle = {
  width: "5vh"
};

const homePageContainerStyles = {
  height: "100vh",
  backgroundImage: "url(" + homePageBackgroundImage + ")",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};

export default ContactUs;
