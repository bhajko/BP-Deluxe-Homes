import React from "react";
import styled from "styled-components";

const BannderDiv = styled.div`
  display: inline-block;
  color: var(--mainWhite);
  padding: 2rem 1rem;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
  z-index: 1;
  h1 {
    font-size: 2.5rem;
  }
  div {
    width: 10rem;
    height: 4px;
    background: ${props => props.theme.primaryColor};
    margin: 1.7rem auto;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 576px) {
    padding: 2rem 3rem;
    h1 {
      font-size: 3rem;
    }
  }
  @media screen and (min-width: 992px) {
    padding: 2rem 6rem;
    h1 {
      font-size: 4rem;
    }
  }
`;

const Banner = ({ children, title, subtitle }) => {
  return (
    <BannderDiv>
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </BannderDiv>
  );
};

export default Banner;
