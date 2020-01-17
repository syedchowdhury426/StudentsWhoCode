import React from "react";

import DesktopContact from "../components/desktop/ContactUs";
import MobileContact from "../components/mobile/ContactUs";

const ContactUs = props => {
  return (
    <div style={{ height: "100%" }}>
      {props.device === "desktop" ? <DesktopContact /> : <MobileContact />}
    </div>
  );
};

export default ContactUs;
