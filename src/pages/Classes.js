import React from "react";

import DesktopClasses from "../components/desktop/Classes";
import MobileClasses from "../components/mobile/Classes";

const Classes = props => {
  return (
    <div style={{ height: "100%" }}>
      {props.device === "desktop" ? <DesktopClasses /> : <MobileClasses />}
    </div>
  );
};

export default Classes;
