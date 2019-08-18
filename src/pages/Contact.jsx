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
import mapStyles from "../mapStyles";

function Map() {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 47.503618, lng: 19.053915 }}
      defaultOptions={{ styles: mapStyles }}
    >
      <Marker
        position={{ lat: 47.503618, lng: 19.053915 }}
        icon={{
          url: "/diamond.svg",
          scaledSize: new window.google.maps.Size(40, 40)
        }}
      />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1150px) {
    flex-direction: column-reverse;
  }
`;

const MapDiv = styled.div`
  flex: 1;
  width: 100%;
  height: 400px;
`;

const Contacts = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1150px) {
    margin: 3em;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  margin-bottom: 2em;
  &:last-child {
    margin-bottom: 0;
  }
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
          <div>
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
              <p>1054 Budapest Hold utca 1.</p>
            </ContactDetails>
          </div>
        </Contacts>
      </ContactWrapper>
    </>
  );
};

export default Contact;
