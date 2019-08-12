import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import logo from "../images/logo.svg";
import styled from "styled-components";

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.75rem 2rem;
  background: ${props => props.theme.offWhite};
  z-index: 2;
`;

const NavCenter = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    height: 19px;
  }
`;

const NavBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  height: 24px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <NavBar>
        <NavCenter>
          <NavHeader>
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
            <NavBtn onClick={this.toggle}>
              <TiThMenu className="nav-icon" />
            </NavBtn>
          </NavHeader>
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
        </NavCenter>
      </NavBar>
    );
  }
}

export default Navbar;
