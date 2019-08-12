import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import AptContainer from "../components/AptContainer";
import Button from "../elements/Button";
import ApartmentsBg from "../images/apartmentsBg.png";

const Apartments = () => {
  return (
    <>
      <Hero height="60vh" img={ApartmentsBg}>
        <Banner title="Our apartments">
          <Button to="/">Return home</Button>
        </Banner>
      </Hero>
      <AptContainer />
    </>
  );
};

export default Apartments;
