import React from "react";

import DesktopHome from "../components/desktop/Home";
import MobileHome from "../components/mobile/Home";

const Home = props => {
  return (
    <div style={{ height: "100%" }}>
      {props.device === "desktop" ? <DesktopHome /> : <MobileHome />}
    </div>
  );
};

export default Home;
