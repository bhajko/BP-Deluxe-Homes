import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import logo from "../images/logo.svg";
import { IconContext } from "react-icons";
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
    align-items: center;
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

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  height: auto;
  transition: ${props => props.theme.mainTransition};
  list-style-type: none;
  a {
    margin: 0 1rem;
    padding: 0.5rem 0;
    text-decoration: none;
    padding: 1rem 0;
    color: ${props => props.theme.mainBlack};
    transition: ${props => props.theme.mainTransition};
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: ${props => props.theme.mainSpacing};
    &:hover {
      color: ${props => props.theme.primaryColor};
    }
  }

  @media screen and (max-width: 768px) {
    height: 0;
    overflow: hidden;
    flex-direction: column;
    a {
      display: block;
    }
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
              <IconContext.Provider
                value={{ color: "#bf9b30", size: "1.5rem" }}
              >
                <TiThMenu />
              </IconContext.Provider>
            </NavBtn>
          </NavHeader>
          <NavLinks
            style={
              this.state.isOpen ? { height: 162 + "px" } : { height: 0 + "px" }
            }
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
          </NavLinks>
        </NavCenter>
      </NavBar>
    );
  }
}

export default Navbar;
