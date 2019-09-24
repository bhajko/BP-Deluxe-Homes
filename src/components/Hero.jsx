import React from "react";
import Header from "../elements/Header";

const Hero = ({ children, height, img }) => {
  return (
    <Header height={height} img={img}>
      {children}
    </Header>
  );
};

Hero.defaultProps = {
  height: "100vh",
  img: "https://i.ibb.co/myChRNY/heroBg.png"
};

export default Hero;
