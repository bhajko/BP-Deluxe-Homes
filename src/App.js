import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Apartments from "./pages/Apartments";
import SingleApartment from "./pages/SingleApartment";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/apartments" component={Apartments} />
        <Route exact path="/apartments/:slug" component={SingleApartment} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
