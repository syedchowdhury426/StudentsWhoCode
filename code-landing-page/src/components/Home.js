import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={imageContainer}>
        <img style={image} src={require("../resources/background.jpg")} />
        <p style={centerText}>HELLO</p>
      </div>
    );
  }
}

const imageContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxHeight: window.innerHeight,
  overflow: "hidden"
};

const image = {
  maxWidth: window.innerWidth
};

const centerText = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "50px"
};

export default Home;
