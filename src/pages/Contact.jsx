import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { IconContext } from "react-icons";
import { FaMapMarker, FaPhone, FaAt } from "react-icons/fa";
import Button from "../elements/Button";
import ContactBg from "../images/contactBg.png";
import styled from "styled-components";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 47.5071801, lng: 19.0487008 }}
    >
      <Marker position={{ lat: 47.5071801, lng: 19.0487008 }} />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  @media screen and (max-width: 1150px) {
    flex-direction: column;
    padding: 0;
  }
`;

const MapDiv = styled.div`
  width: 600px;
  height: 400px;
  padding-right: 3em;
  @media screen and (max-width: 1150px) {
    padding-right: 0;
    width: 100%;
  }
`;

const Contacts = styled.div`
  padding: 2em;
  @media screen and (max-width: 1150px) {
    padding-bottom: 0;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  margin-bottom: 2em;
  p {
    margin-left: 1em;
  }
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
        <MapDiv>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
              process.env.REACT_APP_GOOGLE_KEY
            }`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </MapDiv>
        <Contacts>
          <ContactDetails>
            <IconContext.Provider
              value={{
                color: "#bf9b30",
                size: "1.5em"
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
                size: "1.5em"
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
                size: "1.5em"
              }}
            >
              <FaMapMarker />
            </IconContext.Provider>
            <p>1054 Budapest Alkotmány utca 1.</p>
          </ContactDetails>
        </Contacts>
      </ContactWrapper>
    </>
  );
};

export default Contact;
