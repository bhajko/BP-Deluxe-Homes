import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedApartments from "../components/FeaturedApartments";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Deluxe apartments"
          subtitle="short term rentals in the heart of Budapest"
        >
          <Link to="/apartments" className="btn-primary">
            Our apartments
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedApartments />
    </>
  );
};

export default Home;
