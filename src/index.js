import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApartmentProvider } from "./context";
import { ThemeProvider } from "styled-components";
import "typeface-inter";

const theme = {
  primaryColor: "#bf9b30",
  mainWhite: "#fff",
  offWhite: "#f7f7f7",
  mainBlack: "#222",
  mainGrey: "#ececec",
  darkGrey: "#cfcfcf",
  mainTransition: "all 0.3s ease-in-out",
  mainSpacing: "3px",
  lightShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
  darkShadow: "0px 5px 20px rgba(0, 0, 0, 0.5)"
};

ReactDOM.render(
  <ApartmentProvider>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </ApartmentProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
