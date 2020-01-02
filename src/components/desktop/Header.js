import React from "react";
import { withRouter } from "react-router-dom";

import logo from "../../resources/logo.png";

/*
  Header is the top navigation bar
  Used to display the key links on the site
*/
const Header = props => {
  let { navBarSelection } = props;
  console.log(navBarSelection);
  return (
    <div style={headerContainerStyles}>
      <div style={logoContainerStyles}>
        <img style={logoStyles} src={logo} alt="Students Who Code Logo" />
      </div>
      <div style={menuItemContainerStyles}>
        <div
          style={
            navBarSelection === "contact"
              ? selectedContactMenuItemStyles
              : notSelectedMenuItemStyles
          }
        >
          <span
            style={
              navBarSelection === "contact"
                ? selectedContactTextStyles
                : menuItemTextStyles
            }
          >
            Contact
          </span>
        </div>
        <div
          style={
            navBarSelection === "classes"
              ? selectedClassesMenuItemStyles
              : notSelectedMenuItemStyles
          }
        >
          <span
            style={
              navBarSelection === "classes"
                ? selectedClassesTextStyles
                : menuItemTextStyles
            }
          >
            Classes
          </span>
        </div>
        <div
          style={
            navBarSelection === "home"
              ? selectedHomeMenuItemStyles
              : notSelectedMenuItemStyles
          }
        >
          <span style={menuItemTextStyles}>Home</span>
        </div>
      </div>
    </div>
  );
};

const headerContainerStyles = {
  display: "flex",
  flexDirection: "row",
  flex: 1,
  width: "100vw",
  top: 0,
  position: "fixed"
};

const logoContainerStyles = {
  marginLeft: "50%"
};

const logoStyles = {
  width: "50%",
  paddingTop: "10px"
};

const menuItemContainerStyles = {
  marginTop: "16px",
  marginLeft: "5%",
  display: "flex",
  flexDirection: "row-reverse",
  flex: 1,
  justifyContent: "space-evenly"
};

const selectedHomeMenuItemStyles = {
  backgroundColor: "#9450C9",
  borderRadius: "10px",
  transform: "rotate(-45deg)",
  width: "calc(40px + 1vw)",
  height: "calc(40px + 1vw)"
};

const selectedClassesMenuItemStyles = {
  backgroundColor: "#9450C9",
  borderRadius: "10px",
  transform: "rotate(-45deg)",
  width: "calc(40px + 1vw)",
  height: "calc(40px + 1vw)"
};

const selectedContactMenuItemStyles = {
  backgroundColor: "#9450C9",
  borderRadius: "10px",
  transform: "rotate(-45deg)",
  width: "calc(40px + 1vw)",
  height: "calc(40px + 1vw)"
};

const notSelectedMenuItemStyles = {
  transform: "rotate(-45deg)"
};

const menuItemTextStyles = {
  fontSize: "calc(8px + .6vw)",
  fontFamily: "roboto",
  color: "white",
  display: "table",
  paddingTop: "calc(15px + .05vw)",
  paddingLeft: "calc(10px + .05vw)",
  margin: "auto",
  transform: "rotate(45deg)"
};

const selectedClassesTextStyles = {
  fontSize: "calc(8px + .6vw)",
  fontFamily: "roboto",
  color: "white",
  display: "table",
  paddingTop: "calc(18px + .05vw)",
  paddingLeft: "calc(6px + .05vw)",
  margin: "auto",
  transform: "rotate(45deg)"
};

const selectedContactTextStyles = {
  fontSize: "calc(8px + .6vw)",
  fontFamily: "roboto",
  color: "white",
  display: "table",
  paddingTop: "calc(18px + .05vw)",
  paddingLeft: "calc(5px + .05vw)",
  margin: "auto",
  transform: "rotate(45deg)"
};

/*
  this export statement does a few things
  exports component to be used elsewhere 
  allows history object to be passed to Header through withRouter
*/
export default withRouter(Header);
