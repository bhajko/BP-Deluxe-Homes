import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <Hero>
      <Banner title="Deluxe apartments" subtitle="in the heart of Budapest">
        <Link to="/apartments" className="btn-primary">
          Our apartments
        </Link>
      </Banner>
    </Hero>
  );
};

export default Home;
