import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../elements/Button";

const ApartmentArticle = styled.article`
  box-shadow: ${props => props.theme.lightShadow};
  transition: ${props => props.theme.mainTransition};

  :hover {
    box-shadow: ${props => props.theme.darkShadow};
  }
`;

const ImgContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    display: block;
  }
  ${Button} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  :hover {
    background: rgba(0, 0, 0, 0.8);
    img {
      opacity: 0.3;
    }
    ${Button} {
      opacity: 1;
    }
  }
`;

const ApartmentInfo = styled.div`
  background: ${props => props.theme.mainGrey};
  color: ${props => props.theme.mainBlack};
  padding: 0.5em 0;
  border-top: 5px solid ${props => props.theme.primaryColor};
  p {
    text-transform: capitalize;
    padding: 0.5em 0;
    text-align: center;
    font-weight: 700;
    letter-spacing: ${props => props.theme.mainSpacing};
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h6 {
    margin-bottom: 0;
  }
  p {
    font-weight: 400;
    text-transform: initial;
  }
`;

export default function Apartment({ apartment }) {
  const { name, slug, images, price } = apartment;
  return (
    <ApartmentArticle>
      <ImgContainer>
        <img src={images[0]} alt="single apartment" />
        <Button to={`/apartments/${slug}`}>Info</Button>
      </ImgContainer>
      <ApartmentInfo>
        <p>{name}</p>
        <Price>
          <h6>€{price}</h6>
          <p>/night</p>
        </Price>
      </ApartmentInfo>
      <div />
    </ApartmentArticle>
  );
}

Apartment.propTypes = {
  apartment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
