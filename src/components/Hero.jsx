import React from "react";
import Header from "../elements/Header";
import HeroBg from "../images/heroBg.png";

const Hero = ({ children, height, img }) => {
  return (
    <Header height={height} img={img}>
      {children}
    </Header>
  );
};

Hero.defaultProps = {
  height: "100vh",
  img: HeroBg
};

export default Hero;
