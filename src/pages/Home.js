import React from "react";

import DesktopHome from "../components/desktop/Home";
import MobileHome from "../components/mobile/Home";

const Home = props => {
  return (
    <div>{props.device === "desktop" ? <DesktopHome /> : <MobileHome />}</div>
  );
};

export default Home;
