import React, { Component } from "react";
import Banner from "../components/Banner";
import { ApartmentContext } from "../context";
import StyledHero from "../components/StyledHero";
import styled from "styled-components";
import Button from "../elements/Button";

const ErrorDiv = styled.div`
  text-align: center;
  text-transform: uppercase;
  margin: 2rem 0;
`;

const SingleApartmentWrapper = styled.div`
  padding: 5rem 0 0 0;
`;

const SingleApartmentImages = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 50px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
  img {
    width: 100%;
    display: block;
  }
`;

const SingleApartmentInfo = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr;
  margin: 2rem auto;
  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
`;

const Description = styled.article`
  margin: 1rem 0;
  h3 {
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }
  p {
    line-height: 1.5;
  }
`;

const Info = styled.article`
  margin: 1rem 0;
  h3,
  h6 {
    text-transform: capitalize;
    letter-spacing: ${props => props.theme.mainSpacing};
  }
  h6 {
    font-weight: 300;
  }
  @media screen and (min-width: 992px) {
    padding-left: 3rem;
  }
`;

const ApartmentExtras = styled.section`
  width: 80vw;
  margin: 0 auto 3rem auto;
  h6 {
    text-transform: capitalize;
    letter-spacing: ${props => props.theme.mainSpacing};
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

const Extras = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
`;

class SingleApartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug
    };
  }

  static contextType = ApartmentContext;

  render() {
    const { getApartment } = this.context;
    const apartment = getApartment(this.state.slug);
    if (!apartment) {
      return (
        <ErrorDiv>
          <h3>no such apartment in our database</h3>
          <Button to="/apartments">Back to apartments</Button>
        </ErrorDiv>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = apartment;
    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} apartment`}>
            <Button to="/apartments">Back to apartments</Button>
          </Banner>
        </StyledHero>
        <SingleApartmentWrapper>
          <SingleApartmentImages>
            {images.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </SingleApartmentImages>
          <SingleApartmentInfo>
            <Description>
              <h3>Details</h3>
              <p>{description}</p>
            </Description>
            <Info>
              <h3>Info</h3>
              <h6>Price: €{price}</h6>
              <h6>Size: {size}m²</h6>
              <h6>
                Capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </Info>
          </SingleApartmentInfo>
        </SingleApartmentWrapper>
        <ApartmentExtras>
          <h6>extras</h6>
          <Extras>
            {extras.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </Extras>
        </ApartmentExtras>
      </>
    );
  }
}

export default SingleApartment;
