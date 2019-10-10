import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

/*
  Header is the top navigation bar
  Used to display the key links on the site
*/
const Header = props => {
  const { classes } = props;

  return (
    <AppBar className={classes.appBar}>
      {/* Toolbar allows for all elements within to be shown horizontally */}
      <Toolbar>
        <Typography variant="h6" className={classes.titleContainer}>
          <Button
            onClick={() => props.history.push("/")}
            className={classes.titleLabel}
          >
            Students Who Code
          </Button>
        </Typography>

        {/* Button to go to the classes page */}

        <Button
          onClick={() => props.history.push("/classes")}
          className={classes.classes}
        >
          Classes
        </Button>

        {/* Button to go to the contact page */}

        <Button
          onClick={() => props.history.push("/contact")}
          className={classes.contact}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

/*
  this styles object is what we're using to design the component above
  we're passing it as a prop to Header through the withStyles function 
*/
const styles = () => ({
  appBar: {
    flexGrow: 1,
    left: "0%",
    top: "0%",
    width: "100%",
    boxShadow: "none",
    position: "absolute",
    backgroundColor: "#FFF",
    border: "2px solid black"
    // backgroundColor: "rgb(62, 118, 193)"
  },
  titleContainer: {
    flexGrow: 1,
    position: "relative"
  },
  titleLabel: {
    fontSize: "1em",
    position: "relative"
  },
  classes: {
    fontSize: "1em",
    position: "relative",
    marginRight: "2%"
  },
  contact: {
    fontSize: "1em",
    position: "relative"
  }
});

/*
  this export statement does a few things
  exports component to be used elsewhere 
  connects style object to Header as a prop through withStyles
  allows history object to be passed to Header through withRouter
*/
export default withRouter(withStyles(styles)(Header));
