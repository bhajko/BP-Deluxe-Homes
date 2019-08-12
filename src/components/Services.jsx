import React, { Component } from "react";
import Title from "./Title";
import {
  FaSearchLocation,
  FaGem,
  FaCocktail,
  FaPhoneVolume
} from "react-icons/fa";
import styled from "styled-components";

const ServicesSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.mainWhite};
  text-align: center;
  h6 {
    letter-spacing: var(--mainSpacing);
  }
  p {
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (min-width: 1200px) {
    p {
      width: 100%;
    }
  }
`;

const ServicesCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 50px;
  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

const ServiceArticle = styled.article`
  span {
    display: inline-block;
    color: ${props => props.theme.primaryColor};
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaGem />,
        title: "Luxurious homes",
        info: "Only new or recently renovated apartments in our portfolio."
      },
      {
        icon: <FaSearchLocation />,
        title: "Perfect loaction",
        info: "We will find the perfect loactaion based on your needs."
      },
      {
        icon: <FaCocktail />,
        title: "In the downtown",
        info: "Close to bars and restaurants where you can have some fun."
      },
      {
        icon: <FaPhoneVolume />,
        title: "24/7 service",
        info: "We are always available on one of our contacts if you need us."
      }
    ]
  };

  render() {
    return (
      <ServicesSection>
        <Title title="services" />
        <ServicesCenter>
          {this.state.services.map((service, index) => {
            return (
              <ServiceArticle key={index}>
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </ServiceArticle>
            );
          })}
        </ServicesCenter>
      </ServicesSection>
    );
  }
}
