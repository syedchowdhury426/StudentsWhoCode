import React, { Component, Content } from "react";
import * as emailjs from "emailjs-com";
//import Layout from '../components/layout'
import Header from "../desktop/Header";
import {
  Button,
  Container,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
//import { StyleSheet } from 'react-native';
import facebookIcon from "../../resources/facebook.png";
import instragramIcon from "../../resources/instagram.png";
import linkedinIcon from "../../resources/linkedin.png";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    if (name && email && subject && message) {
      let templateParams = {
        from_name: email,
        to_name: name,
        subject: subject,
        message_html: message,
      };

      emailjs.send(
        "gmail",
        "template_intBIcNy",
        templateParams,
        "user_CV2SnpnBu4ECpbwOBqmAA"
      );

      this.resetForm();
    } else {
      this.setState({
        errorMessage: "All fields must be filled out before submission!",
      });
    }
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      errorMessage: "",
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <div style={divStyle}>
        <Header navBarSelection="contact" />

        <p style={mainHeaderText}>Contact Us</p>
        <p style={errorMessageText}>{this.state.errorMessage}</p>
        <Container style={containerStyles}>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <div style={formStyle}>
              <FormGroup style={formGroupStyle} controlId="formBasicEmail">
                {/*}<Label className="text-muted">Email address</Label>*/}
                <Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, "email")}
                  placeholder="Email:"
                  style={inputStyle}
                />
              </FormGroup>

              <FormGroup style={formGroupStyle} controlId="formBasicName">
                {/*}<Label className="text-muted">Name</Label>*/}
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, "name")}
                  placeholder="Name:"
                  style={inputStyle}
                />
              </FormGroup>
            </div>
            <FormGroup controlId="formBasicSubject">
              {/*}<Label className="text-muted">Subject</Label>*/}
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, "subject")}
                placeholder="Subject:"
                style={inputStyle}
              />
            </FormGroup>

            <FormGroup controlId="formBasicMessage">
              {/*}<Label className="text-muted">Message</Label>*/}
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, "message")}
                placeholder="Body:"
                style={inputStyle}
              />
            </FormGroup>

            <Button style={buttonStyle} variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Container>

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

const divStyle = {
  width: "100vw",
};
const containerStyles = {
  //alignItems: 'center',
  //justifyContent: 'center',
  textAlign: "center",
  borderRadius: "20px",
  //marginTop: "5%",
  paddingTop: "5vh",
  paddingBottom: "2vh",
  width: "40%",
  background: "#FFFFFF",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
};

const formStyle = {
  display: "flex",
};

const formGroupStyle = {
  width: "50%",
};

const inputStyle = {
  backgroundColor: "#EBF3F5",
};

const buttonStyle = {
  borderRadius: "50%",
  textAlign: "center",
  padding: "0px",
  width: "45px",
  minWidth: "40px",
  height: "45px",
  //minHeight: "3vw",
  backgroundColor: "white",
  color: "black",
  fontWeight: "bold",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
};

const socialMediaContainer = {
  //left: 0,
  bottom: "0px",
  width: "100%",
  backgroundColor: "#5ED1EC",
  textAlign: "center",
  height: "5vh",
  //marginTop: "20vh",
  //paddingTop: "5vh"
  position: "absolute",
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

const mainHeaderText = {
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
  fontFamily: "Palanquin Dark, sans-serif",
  fontSize: "3.5vw",
  paddingTop: "15vh",
};

const errorMessageText = {
  textAlign: "center",
  color: "black",
  fontWeight: "bold",
  fontFamily: "Palanquin Dark, sans-serif",
  fontSize: "4vh",
};

export default ContactForm;
