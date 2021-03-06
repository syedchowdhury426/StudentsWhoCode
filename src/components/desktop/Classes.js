import React, { Component } from "react";

import Header from "../desktop/Header";

import scratchIcon from "../../resources/scratch.png";
import webIcon from "../../resources/web.png";
import advancedIcon from "../../resources/advanced.png";
import scrollDownImage from "../../resources/scrollDown.png";
import facebookIcon from "../../resources/facebook.png";
import instragramIcon from "../../resources/instagram.png";
import linkedinIcon from "../../resources/linkedin.png";

class Classes extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header navBarSelection="classes" />

        <p style={mainHeaderText}>Elementary</p>

        <div style={iconContainer}>
          <img style={iconStyle} src={scratchIcon} />
        </div>

        <p style={bodyStyle}>
          Our elementary program at Students Who Code will be based around <strong>MIT’s</strong>{" "}
          open-source <strong>Scratch</strong> Software.
          <br />
          MIT developed this program as a simplified entry point into
          programming for <strong>young students</strong>.<br />
          It uses a drag and drop feature while maintaining all of the{" "}
          <strong>logic</strong> and fundamentals behind a real coding language.
          <br />
          Google took note of Scratch and created its own set of accessible
          lesson plans on their highly acclaimed <strong>CS First</strong>{" "}
          platform.
          <br />
          CS First allows us to track the <strong>metrics</strong> of students’{" "}
          <strong>performance</strong>.
        </p>

        <a target="_blank" href="https://mailchi.mp/f10666f685d4/school-interest-form" style={signUpStyle}>
          Sign up for Scratch!
        </a>

        <div style={scrollDownContainer}>
          <a
            onClick={() => {
              document.getElementById("intermediate").scrollIntoView();
              document.getElementById("classes").scrollTop += 220;
            }}
          >
            <img src={scrollDownImage} />
          </a>
        </div>

        <p
          id="intermediate"
          style={otherHeadersText}
          ref={(intermediateElement) => {
            this.intermediateElement = intermediateElement;
          }}
        >
          Intermediate
        </p>

        <div style={iconContainer}>
          <img style={webIconStyle} src={webIcon} />
        </div>

        <p style={bodyStyle}>
          Our intermediate program at Students Who Code starts off with <strong>Scratch</strong> for
          the early middle school students.
          <br />
          Scratch will be used to introduce students to the fundamentals of{" "}
          <strong>programming</strong>.<br />
          Younger students, who have completed this Scratch portion, and older
          students will be able to join the <strong>
            Web Development
          </strong>{" "}
          class.
          <br />
          This class will teach the basics of web development, using{" "}
          <strong>HTML & CSS</strong>, and students will be able to create their
          own <strong>web pages</strong>.
        </p>

        <a target="_blank" href="https://mailchi.mp/f10666f685d4/school-interest-form" style={signUpStyle}>
          Sign up for Web Development!
        </a>

        <div style={scrollDownContainer}>
          <a
            onClick={() => {
              document.getElementById("advanced").scrollIntoView();
              document.getElementById("classes").scrollTop += 100;
            }}
          >
            <img src={scrollDownImage} />
          </a>
        </div>

        <p
          id="advanced"
          style={otherHeadersText}
          ref={(advancedElement) => {
            this.advancedElement = advancedElement;
          }}
        >
          Advanced
        </p>

        <div style={iconContainer}>
          <img style={webIconStyle} src={advancedIcon} />
        </div>

        <p style={bodyStyle}>
          Our advanced program at Students Who Code will target the older students, 13 and up. There
          will be <strong>two</strong> classes in this program.
          <br />
          Students will have the option of learning{" "}
          <strong>Web Development</strong>, with{" "}
          <strong>HTML, CSS, and JavaScript</strong>, or{" "}
          <strong>Object-Oriented Programming</strong> with the most popular
          programming language to date, <strong>Java</strong>.{" "}
        </p>

        <a target="_blank" href="https://mailchi.mp/f10666f685d4/school-interest-form" style={signUpStyle}>
          Sign up for Java Development!
        </a>

        <div style={emptyContainer}>.</div>

        <div style={socialMediaContainer}>
          <span>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/studentswhocode/"
            >
              <img style={leftsocialIconStyle} src={linkedinIcon} />
            </a>
            <a
              target="_blank"
              href="https://instagram.com/studentswhocode?igshid=1m3db0xphlnl7"
            >
              <img style={socialIconStyle} src={instragramIcon} />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/Students-Who-Code-113402890210105/"
            >
              <img style={rightsocialIconStyle} src={facebookIcon} />
            </a>
          </span>
        </div>
      </div>
    );
  }
}

const mainHeaderText = {
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
  fontFamily: "Palanquin Dark, sans-serif",
  fontSize: "3.5vw",
  paddingTop: "14vh",
};

const otherHeadersText = {
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
  fontFamily: "Palanquin Dark, sans-serif",
  fontSize: "3.5vw",
  paddingTop: "35vh",
};

const iconContainer = {
  textAlign: "center",
};

const iconStyle = {
  width: "10vw",
  textAlign: "center",
  paddingTop: "10px",
};

const webIconStyle = {
  width: "15vw",
  textAlign: "center",
};

const bodyStyle = {
  marginTop: "4vh",
  fontFamily: "roboto",
  borderRadius: "20px",
  backgroundColor: "#5ED1EC",
  color: "#033665",
  fontSize: "1.3vw",
  marginLeft: "20vw",
  marginRight: "20vw",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "10px",
  paddingRight: "5px",
  lineHeight: 2,
};

const signUpStyle = {
  display: "block",
  textAlign: "center",
  fontSize: "1.3vw",
  color: "white",
  fontFamily: "Palanquin Dark, sans-serif",
  fontWeight: "bold",
};

const scrollDownContainer = {
  marginTop: "5vh",
  textAlign: "center",
};

const emptyContainer = {
  marginTop: "30vh",
};

const socialMediaContainer = {
  left: 0,
  bottom: 0,
  width: "100vw",
  backgroundColor: "#5ED1EC",
  textAlign: "center",
  height: "5vh",
};

const socialIconStyle = {
  width: "5vh",
  marginLeft: "10px",
  marginRight: "10px",
};

const leftsocialIconStyle = {
  width: "5vh",
};

const rightsocialIconStyle = {
  width: "5vh",
};

export default Classes;
