import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import logo from "../images/logo.svg";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
            <button type="button" className="nav-btn" onClick={this.toggle}>
              <TiThMenu className="nav-icon" />
            </button>
          </div>
          <div>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              <li>
                <NavLink exact to="/" activeStyle={{ color: "#BF9B30" }}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/apartments" activeStyle={{ color: "#BF9B30" }}>
                  Apartments
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeStyle={{ color: "#BF9B30" }}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
