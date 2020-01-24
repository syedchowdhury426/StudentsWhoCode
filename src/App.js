import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "reactstrap";

import Classes from "./pages/Classes";
import Contact from "./pages/ContactUs";
import Home from "./pages/Home";

/**
 * Students Who Code Landing Page
 */

class App extends Component {
  constructor() {
    super();
    this.mediaQuery = {
      desktop: 768
    };
    this.state = {
      windowWidth: document.body.clientWidth
    };
  }

  /**
   * when the component is being mounted (one of the first things that occur)
   * it will create an event listener that listens to the changes in browser
   * resizing so we can dynamically make changes depending on how wide the screen is
   */
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ windowWidth: document.body.clientWidth });
    });
  }

  render() {
    let device =
      this.state.windowWidth < this.mediaQuery.desktop ? "mobile" : "desktop";
    return (
      <Router>
        <Route exact path="/" render={() => <Home device={device} />} />
        <Route
          exact
          path="/classes"
          render={() => <Classes device={device} />}
        />
        <Route
          exact
          path="/contact"
          render={() => <Contact device={device} />}
        />
      </Router>
    );
  }
}

export default App;
