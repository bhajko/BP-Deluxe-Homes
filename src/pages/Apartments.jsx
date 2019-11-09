import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import AptContainer from "../components/AptContainer";
import Button from "../elements/Button";

const Apartments = () => {
  return (
    <>
      <Hero height="60vh" img={"https://i.ibb.co/L05MJP7/apartments-Bg.jpg"}>
        <Banner title="Our apartments">
          <Button to="/">Return home</Button>
        </Banner>
      </Hero>
      <AptContainer />
    </>
  );
};

export default Apartments;
