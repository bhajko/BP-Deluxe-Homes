import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedApartments from "../components/FeaturedApartments";
import Button from "../elements/Button";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Deluxe apartments"
          subtitle="short term rentals in the heart of Budapest"
        >
          <Button to="/apartments">Our apartments</Button>
        </Banner>
      </Hero>
      <Services />
      <FeaturedApartments />
    </>
  );
};

export default Home;
