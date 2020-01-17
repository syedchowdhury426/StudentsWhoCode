import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import logo from "../../resources/logo.png";
import hamburgerIcon from "../../resources/hamburger.png";

import Modal from "react-bootstrap/Modal";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  render() {
    return (
      <div style={headerContainerStyles}>
        <div style={logoContainerStyles}>
          <img
            style={logoStyles}
            src={logo}
            alt="Students Who Code Logo"
            onClick={() => this.props.history.push("/")}
          />
        </div>
        <div>
          <img
            style={hamburgerIconStyles}
            src={hamburgerIcon}
            alt="Hamburger menu to view available pages on site"
            onClick={() => this.setState({ showModal: true })}
          />
        </div>
        <Modal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
          centered
        >
          <Modal.Header>
            <Modal.Title>Students Who Code</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={modalLinkStyles}
              onClick={() => this.props.history.push("/")}
            >
              Home
            </div>
            <div
              style={modalLinkStyles}
              onClick={() => this.props.history.push("/classes")}
            >
              Classes
            </div>
            <div
              style={modalLinkStyles}
              onClick={() => this.props.history.push("/contact")}
            >
              Contact
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const headerContainerStyles = {
  display: "flex",
  flexDirection: "row",
  flex: 1,
  justifyContent: "space-between",
  width: "100vw",
  top: 0,
  position: "fixed"
};

const logoContainerStyles = {
  cursor: "pointer"
};

const logoStyles = {
  width: "80px"
};

const hamburgerIconStyles = {
  width: "40px",
  marginTop: "20px",
  paddingRight: "10px"
};

const modalLinkStyles = {
  padding: "5px",
  margin: "5px",
  border: "2px solid black",
  borderRadius: "50px",
  textAlign: "center"
};

export default withRouter(Header);
