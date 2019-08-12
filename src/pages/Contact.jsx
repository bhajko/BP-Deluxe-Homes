import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { IconContext } from "react-icons";
import { FaMapMarker, FaPhone, FaAt } from "react-icons/fa";
import Button from "../elements/Button";
import ContactBg from "../images/contactBg.png";
import styled from "styled-components";

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`;

const Map = styled.div`
  width: 500px;
`;

const Contacts = styled.div``;

const ContactDetails = styled.div`
  display: flex;
  margin-bottom: 2em;
`;

const Contact = () => {
  return (
    <>
      <Hero height="60vh" img={ContactBg}>
        <Banner title="Contact us">
          <Button to="/">Return home</Button>
        </Banner>
      </Hero>
      <ContactWrapper>
        <Map>
          <p>ide jön a map</p>
        </Map>
        <Contacts>
          <ContactDetails>
            <IconContext.Provider
              value={{
                color: "#bf9b30",
                size: "1.5em",
                className: "contactIcon"
              }}
            >
              <FaPhone />
            </IconContext.Provider>
            <p>+36 20 111 222 3</p>
          </ContactDetails>
          <ContactDetails>
            <IconContext.Provider
              value={{
                color: "#bf9b30",
                size: "1.5em",
                className: "contactIcon"
              }}
            >
              <FaAt />
            </IconContext.Provider>
            <p>info@bpdeluxehomes.com</p>
          </ContactDetails>
          <ContactDetails>
            <IconContext.Provider
              value={{
                color: "#bf9b30",
                size: "1.5em",
                className: "contactIcon"
              }}
            >
              <FaMapMarker />
            </IconContext.Provider>
            <p>1051 Budapest Alkotmány utca 1.</p>
          </ContactDetails>
        </Contacts>
      </ContactWrapper>
    </>
  );
};

export default Contact;
