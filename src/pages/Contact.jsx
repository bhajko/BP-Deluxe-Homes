import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { IconContext } from "react-icons";
import { FaMapMarker, FaPhone, FaAt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Hero hero="contactHero">
        <Banner title="Contact us">
          <Link to="/" className="btn-primary">
            Return home
          </Link>
        </Banner>
      </Hero>
      <div className="contact-wrapper">
        <div className="map">
          <p>ide jön a map</p>
        </div>
        <div className="contact-details">
          <div className="contact-details-inner">
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
          </div>
          <div className="contact-details-inner">
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
          </div>
          <div className="contact-details-inner">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
