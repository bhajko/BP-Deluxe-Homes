import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../elements/Button";

const ApartmentArticle = styled.article`
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
  :hover {
    box-shadow: var(--darkShadow);
  }
`;

const ImgContainer = styled.div`
  position: relative;
  :hover {
    background: rgba(0, 0, 0, 0.8);
    img {
      opacity: 0.3;
    }
    PriceTop {
      opacity: 0;
    }
    ApartmentLinkButton {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  img {
    width: 100%;
    display: block;
    transition: ${props => props.theme.mainTransition};
  }
`;

const PriceTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  color: ${props => props.theme.mainWhite};
  padding: 0.3rem 0.6rem 0.5rem;
  border-bottom-right-radius: 1rem;
  font-size: 0.5rem;
  text-align: center;
  transition: ${props => props.theme.mainTransition};
  h6 {
    margin-bottom: 0;
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: ${props => props.theme.mainSpacing};
  }
`;

const ApartmentLinkButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: scale(0);
  transition: all 0.3s linear;
`;

const ApartmentInfo = styled.p`
  background: ${props => props.theme.mainGrey};
  color: ${props => props.theme.mainBlack};
  text-transform: capitalize;
  padding: 0.5rem 0;
  text-align: center;
  font-weight: 700;
  letter-spacing: ${props => props.theme.mainSpacing};
`;

export default function Apartment({ apartment }) {
  const { name, slug, images, price } = apartment;
  return (
    <ApartmentArticle>
      <ImgContainer>
        <img src={images[0]} alt="single apartment" />
        <PriceTop>
          <h6>€{price}</h6>
          <p>per night</p>
        </PriceTop>
        <ApartmentLinkButton to={`/apartments/${slug}`}>
          Info
        </ApartmentLinkButton>
      </ImgContainer>
      <ApartmentInfo>{name}</ApartmentInfo>
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
