import React, { Component } from "react";
import Mailto from 'react-protected-mailto';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //return <div>Contact</div>;
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
  }
}

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

export default Contact;
