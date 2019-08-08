import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

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
            <Link to="/">BP Deluxe Homes</Link>
            <button type="button" className="nav-btn" onClick={this.toggle}>
              <TiThMenu className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/apartments">Apartments</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
