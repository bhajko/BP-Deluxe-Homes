import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const Apartments = () => {
  return (
    <Hero hero="apartmentsHero">
      <Banner title="Our apartments">
        <Link to="/" className="btn-primary">
          Return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Apartments;
