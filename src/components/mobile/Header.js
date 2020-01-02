import React from "react";
import { withRouter } from "react-router-dom";

import logo from "../../resources/logo.png";
import hamburgerIcon from "../../resources/hamburger.png";

const Header = props => {
  return (
    <div style={headerContainerStyles}>
      <div style={logoContainerStyles}>
        <img
          style={logoStyles}
          src={logo}
          alt="Students Who Code Logo"
          onClick={() => props.history.push("/")}
        />
      </div>
      <div style={hamburgerIconContainerStyles}>
        <img
          style={hamburgerIconStyles}
          src={hamburgerIcon}
          alt="Hamburger menu to view available pages on site"
        />
      </div>
    </div>
  );
};

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

const hamburgerIconContainerStyles = {};

const hamburgerIconStyles = {
  width: "40px",
  marginTop: "20px",
  paddingRight: "10px"
};

export default withRouter(Header);
