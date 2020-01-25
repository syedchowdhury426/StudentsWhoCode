import React, { Component } from "react";

import Header from "../mobile/Header";

import homePageBackgroundImage from "../../resources/mobile-background.jpg";
import scrollDownImage from "../../resources/scrollDown.png";
import facebookIcon from "../../resources/facebook.png";
import instragramIcon from "../../resources/instagram.png";
import linkedinIcon from "../../resources/linkedin.png";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={homePageContainerStyles}>
        <Header navBarSelection="home" />

        <p style={title}>STUDENTS WHO CODE</p>
        <p style={introText}>
          We are an <strong>after school program</strong> committed to inspring
          a <strong>passion for coding</strong> in students from an{" "}
          <strong>early age</strong>
        </p>

        <div style={scrollDownContainer}>
          <a
            onClick={() =>
              window.scrollTo(0, this.whatAreWeElement.offsetTop - 100)
            }
          >
            <img src={scrollDownImage} />
          </a>
        </div>

        <p
          id="whatAreWe"
          style={whatAreWeHeaderStyle}
          ref={whatAreWeElement => {
            this.whatAreWeElement = whatAreWeElement;
          }}
        >
          What Are We?
        </p>
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

        <div style={scrollDownContainer}>
          <a
            onClick={() =>
              window.scrollTo(0, this.whoAreWeElement.offsetTop - 100)
            }
          >
            <img src={scrollDownImage} />
          </a>
        </div>

        <p
          id="whoAreWe"
          style={whoAreWeHeaderStyle}
          ref={whoAreWeElement => {
            this.whoAreWeElement = whoAreWeElement;
          }}
        >
          Who Are We?
        </p>

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

        <p>.</p>

        <div style={socialMediaContainer}>
          <span>
            <img style={leftsocialIconStyle} src={linkedinIcon} />
            <img style={socialIconStyle} src={instragramIcon} />
            <img style={rightsocialIconStyle} src={facebookIcon} />
          </span>
        </div>
      </div>
    );
  }
}

const homePageContainerStyles = {
  content: "",
  display: "block",
  position: "fixed",
  left: 0,
  top: 0,
  width: "100%",
  height: "100",
  zIndex: -10,
  background: "url(" + homePageBackgroundImage + ") no-repeat center center",
  webkitBackgroundSize: "cover",
  mozBackgroundSize: "cover",
  oBackgroundSize: "cover",
  backgroundSize: "cover",
  backgroundAttachment: "scroll"
};

const title = {
  paddingTop: "30vh",
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
  fontFamily: "Palanquin Dark, sans-serif",
  fontSize: "3.5vh"
};

const introText = {
  textAlign: "center",
  fontFamily: "roboto",
  borderRadius: "30px",
  backgroundColor: "#5ED1EC",
  color: "#033665",
  marginTop: "5vh",
  marginLeft: "10vw",
  marginRight: "10vw",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "5px",
  paddingRight: "5px",
  fontSize: "2.2vh"
};

const scrollDownContainer = {
  marginTop: "5vh",
  textAlign: "center"
};

const whatAreWeHeaderStyle = {
  marginTop: "40vh",
  color: "white",
  fontWeight: "bold",
  fontFamily: "Palanquin Dark, sans-serif",
  fontSize: "3vh",
  textAlign: "center"
};

const whatAreWeBodyStyle = {
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
  paddingRight: "5px"
};

const whoAreWeHeaderStyle = {
  marginTop: "40vh",
  color: "white",
  fontWeight: "bold",
  fontFamily: "Palanquin Dark, sans-serif",
  fontSize: "3vh",
  textAlign: "center"
};

const whoAreWeBodyStyle = {
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
  paddingRight: "10px",
  marginBottom: "40vh"
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

export default Home;
