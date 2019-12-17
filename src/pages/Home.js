import React from "react";

import DesktopHome from "../components/desktop/Home";
import MobileHome from "../components/mobile/Home";

const Home = props => {
  const { device } = props;

  if (device === "desktop") return <DesktopHome />;
  else if (device === "mobile") return <MobileHome />;
};

export default Home;
