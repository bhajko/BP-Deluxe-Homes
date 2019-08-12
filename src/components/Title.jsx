import React from "react";
import styled from "styled-components";

const TitleDiv = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  h4 {
    font-size: 2rem;
    letter-spacing: ${props => props.theme.mainSpacing};
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  div {
    width: 5rem;
    height: 4px;
    margin: 0 auto;
    background: ${props => props.theme.primaryColor};
  }
  @media only screen and (max-width: 321px) {
    h4 {
      font-size: 1.5em;
    }
  }
  @media only screen and (max-width: 768px) {
    h4 {
      font-size: 1.8em;
    }
  }
`;

const Title = ({ title }) => {
  return (
    <TitleDiv>
      <h4>{title}</h4>
      <div />
    </TitleDiv>
  );
};

export default Title;
