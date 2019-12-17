import React, { Component } from "react";

/*
  Home is the starting page 
  displays branding image 
  brief information on what we do 
*/
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.device + " " + document.body.clientWidth);
    return (
      <div style={imageContainer}>
        <img style={image} src={require("../resources/background.jpg")} />
        <p style={centerText}>Students Who Code</p>
      </div>
    );
  }
}

/*
  style for box that contains the image
  used to set the image to be in the center 
  cuts off the rest of the image that overflows past the page 
*/
const imageContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxHeight: window.innerHeight,
  overflow: "hidden"
};

/*
  style for image 
  used to set a maxWidth, so for future images it never gets too big 
*/
const image = {
  maxWidth: window.innerWidth
};

/*
  style for the container of the center text 
  used to position text onto image 
  creates shape for background 
*/
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

export default Home;
