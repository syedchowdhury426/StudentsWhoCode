import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Classes from "./components/Classes";
import Contact from "./components/Contact";

/**
 * Students Who Code Landing Page
 */
function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/classes" component={Classes} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
