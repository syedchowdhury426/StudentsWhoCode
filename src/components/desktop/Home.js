import React from "react";

import Header from "../desktop/Header";

import homePageBackgroundImage from "../../resources/desktop-background-2.jpg";
import scrollDownImage from "../../resources/scrollDown.png";
import facebookIcon from "../../resources/facebook.png";
import instragramIcon from "../../resources/instagram.png";
import linkedinIcon from "../../resources/linkedin.png";

const Home = props => {
  return (
    <div style={homePageContainerStyles}>
      <Header navBarSelection="home" />
      <p style={title}>STUDENTS WHO CODE</p>
      <p style={introText}>
        We are an <strong>after school program</strong> committed to inspring a{" "}
        <strong>passion for coding</strong> in students from an{" "}
        <strong>early age</strong>
      </p>
      <div style={scrollDownContainer}>
        <a href="#whatAreWe">
          <img src={scrollDownImage} />
        </a>
      </div>
      <div id="whatAreWe" style={whatAreWesectionStyle}>
        <p style={whatAreWeHeaderStyle}>What Are We?</p>
        <div style={whatAreWeBodyStyle}>
          <p>
            We are an <strong>afterschool</strong> program with the goal of
            introducing students to <strong>coding</strong>. Something that they
            usually would not experience until their <strong>college</strong>{" "}
            years
          </p>
          <p>
            We work with <strong>educational institutions,</strong>
            <br /> and also <strong>local communities</strong> to bring this
            program to their youth
          </p>
          <p>
            StudentsWhoCode is intended for three age demographics:
            <br /> <strong>elementary</strong>, <strong>middle</strong>, and{" "}
            <strong>high</strong> school
          </p>
        </div>
      </div>
      <div style={scrollDownContainer}>
        <a href="#whoAreWe">
          <img src={scrollDownImage} />
        </a>
      </div>
      <div id="whoAreWe" style={whoAreWesectionStyle}>
        <p style={whoAreWeHeaderStyle}>Who Are We?</p>
        <div style={whoAreWeBodyStyle}>
          <p>
            <strong>Syed Chowdhury</strong>
            <br />
            Software Engineer and Product Manager at JPMorgan Chase
          </p>
          <p>
            <strong>Idrees Ally</strong>
            <br />
            Assistant Professor with Rutgers Continuing Education Program at
            TrilogyEd Bootcamp
          </p>
          <p>
            <strong>Tasfiqul Mollah</strong>
            <br />
            Business Management Student
          </p>
        </div>
      </div>
      <p>.</p>
      <div style={socialMediaContainer}>
        <span>
          <img style={iconStyle} src={facebookIcon} />
          <img style={iconStyle} src={instragramIcon} />
          <img style={iconStyle} src={linkedinIcon} />
        </span>
      </div>
    </div>
  );
};

const homePageContainerStyles = {
  position: "relative",
  height: "100%",
  backgroundImage: "url(" + homePageBackgroundImage + ")",
  backgroundSize: "100% 95%",
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
  borderRadius: "30px",
  backgroundColor: "#13C9EA",
  color: "#033665",
  marginTop: "5vh",
  marginLeft: "27vw",
  marginRight: "27vw",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "5px",
  paddingRight: "5px",
  fontSize: "1.5vw"
};

const scrollDownContainer = {
  marginTop: "5vh",
  textAlign: "center"
};

const whatAreWesectionStyle = {
  marginTop: "40vh",
  display: "flex",
  flexDirection: "row",
  flex: 1,
  justifyContent: "space-evenly"
};

const whatAreWeHeaderStyle = {
  color: "white",
  fontWeight: "bold",
  fontFamily: "futura",
  fontSize: "3vw",
  width: "60vw",
  paddingLeft: "10vw"
};

const whatAreWeBodyStyle = {
  fontFamily: "roboto",
  borderRadius: "20px",
  backgroundColor: "#13C9EA",
  color: "#033665",
  fontSize: "1.2vw",
  marginLeft: "5vw",
  marginRight: "5vw",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "10px",
  paddingRight: "5px"
};

const whoAreWesectionStyle = {
  marginTop: "40vh",
  display: "flex",
  flexDirection: "row",
  flex: 1,
  justifyContent: "space-evenly",
  marginBottom: "40vh"
};

const whoAreWeHeaderStyle = {
  color: "white",
  fontWeight: "bold",
  fontFamily: "futura",
  fontSize: "3vw",
  width: "50vw",
  paddingLeft: "10vw"
};

const whoAreWeBodyStyle = {
  fontFamily: "roboto",
  borderRadius: "20px",
  backgroundColor: "#13C9EA",
  color: "#033665",
  fontSize: "1.2vw",
  marginRight: "5vw",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "5px",
  paddingRight: "10px"
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

const iconStyle = {
  width: "5vh"
};

export default Home;
