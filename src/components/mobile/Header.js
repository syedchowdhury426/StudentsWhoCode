import React from "react";
import { withRouter } from "react-router-dom";

import logo from "../../resources/logo.png";

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
  cursor: "pointer"
};

const logoStyles = {
  width: "50%"
};

export default withRouter(Header);
