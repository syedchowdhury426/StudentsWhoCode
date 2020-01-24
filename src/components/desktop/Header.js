import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import logo from "../../resources/logo.png";

import homePageBackgroundImage from "../../resources/desktop-background.jpg";
import homePageBackgroundImage2 from "../../resources/desktop-background-2.jpg";

/*
  Header is the top navigation bar
  Used to display the key links on the site
*/
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImageUsed:
        this.props.navBarSelection === "classes"
          ? homePageBackgroundImage
          : homePageBackgroundImage2
    };
  }

  render() {
    let { navBarSelection } = this.props;
    const styles = {
      headerContainerStyles: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        width: "100vw",
        top: 0,
        position: "fixed",

        backgroundImage: "url(" + this.state.backgroundImageUsed + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      },
      logoContainerStyles: {
        marginLeft: "47vw",
        cursor: "pointer"
      },
      logoStyles: {
        width: "50%",
        paddingTop: "10px"
      },
      menuItemContainerStyles: {
        marginTop: "16px",
        marginLeft: "5%",
        display: "flex",
        flexDirection: "row-reverse",
        flex: 1,
        justifyContent: "space-evenly"
      },
      selectedHomeMenuItemStyles: {
        backgroundColor: "#9450C9",
        borderRadius: "10px",
        transform: "rotate(-45deg)",
        width: "calc(40px + 1vw)",
        height: "calc(40px + 1vw)"
      },
      selectedClassesMenuItemStyles: {
        backgroundColor: "#9450C9",
        borderRadius: "10px",
        transform: "rotate(-45deg)",
        width: "calc(40px + 1vw)",
        height: "calc(40px + 1vw)"
      },
      selectedContactMenuItemStyles: {
        cursor: "pointer",
        backgroundColor: "#9450C9",
        borderRadius: "10px",
        transform: "rotate(-45deg)",
        width: "calc(40px + 1vw)",
        height: "calc(40px + 1vw)"
      },
      notSelectedMenuItemStyles: {
        transform: "rotate(-45deg)",
        cursor: "pointer"
      },
      menuItemTextStyles: {
        fontSize: "calc(8px + .6vw)",
        fontFamily: "roboto",
        color: "white",
        display: "table",
        paddingTop: "calc(15px + .05vw)",
        paddingLeft: "calc(10px + .05vw)",
        margin: "auto",
        transform: "rotate(45deg)"
      },
      selectedClassesTextStyles: {
        fontSize: "calc(8px + .6vw)",
        fontFamily: "roboto",
        color: "white",
        display: "table",
        paddingTop: "calc(18px + .05vw)",
        paddingLeft: "calc(6px + .05vw)",
        margin: "auto",
        transform: "rotate(45deg)"
      },
      selectedContactTextStyles: {
        fontSize: "calc(8px + .6vw)",
        fontFamily: "roboto",
        color: "white",
        display: "table",
        paddingTop: "calc(18px + .05vw)",
        paddingLeft: "calc(5px + .05vw)",
        margin: "auto",
        transform: "rotate(45deg)"
      }
    };

    const {
      headerContainerStyles,
      logoContainerStyles,
      logoStyles,
      menuItemContainerStyles,
      selectedContactMenuItemStyles,
      selectedContactTextStyles,
      menuItemTextStyles,
      selectedClassesMenuItemStyles,
      selectedClassesTextStyles,
      selectedHomeMenuItemStyles,
      notSelectedMenuItemStyles
    } = styles;
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
        <div style={menuItemContainerStyles}>
          <div
            style={
              navBarSelection === "contact"
                ? selectedContactMenuItemStyles
                : notSelectedMenuItemStyles
            }
            onClick={() => this.props.history.push("/contact")}
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
            onClick={() => this.props.history.push("/classes")}
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
            onClick={() => this.props.history.push("/")}
          >
            <span style={menuItemTextStyles}>Home</span>
          </div>
        </div>
      </div>
    );
  }
}

/*
  this export statement does a few things
  exports component to be used elsewhere 
  allows history object to be passed to Header through withRouter
*/
export default withRouter(Header);
