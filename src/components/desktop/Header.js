import React from "react";
import { withRouter } from "react-router-dom";

import logo from "../../resources/logo.png";

/*
  Header is the top navigation bar
  Used to display the key links on the site
*/
const Header = props => {
  let { navBarSelection } = props;
  return (
    <div style={headerContainerStyles}>
      <div style={logoContainerStyles}>
        <img style={logoStyles} src={logo} alt="Students Who Code Logo" />
      </div>
      <div style={menuItemContainerStyles}>
        <div style={menuItemStyles}>Contact</div>
        <div style={menuItemStyles}>Classes</div>
        <div style={menuItemStyles}>Home</div>
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
  width: "50%"
};

const menuItemContainerStyles = {
  marginTop: "16px",
  marginLeft: "10%",
  display: "flex",
  flexDirection: "row-reverse",
  flex: 1,
  justifyContent: "space-around"
};

const menuItemStyles = {
  fontSize: "calc(10px + .5vw)",
  fontFamily: "roboto",
  color: "white"
};

/*
  this export statement does a few things
  exports component to be used elsewhere 
  allows history object to be passed to Header through withRouter
*/
export default withRouter(Header);
