import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApartmentProvider } from "./context";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "typeface-inter";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
  padding-top: 40px;
  color: ${props => props.theme.mainBlack};
  background: ${props => props.theme.mainWhite};
  font-family: "inter";
  line-height: 1.4;
  }
  h1 {
    font-size: 3em;
    line-height: 1;
    margin-bottom: 0.5em;
  }
  h2 {
    font-size: 2em;
    margin-bottom: 0.75em;
  }
  h3 {
    font-size: 1.5em;
    line-height: 1;
    margin-bottom: 1em;
  }
  h4 {
    font-size: 1.2em;
    line-height: 1.25;
    margin-bottom: 1.25em;
  }
  h5 {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 1.5em;
  }
  h6 {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 1.5em;
  }
  @media only screen and (max-width: 321px) {
  html {
    font-size: 14px;
    }
  }
  /* @media only screen and (min-width: 768px) {
    html {
      font-size: 16px;
    }
  } */
`;

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
        <>
          <GlobalStyle />
          <App />
        </>
      </ThemeProvider>
    </Router>
  </ApartmentProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
