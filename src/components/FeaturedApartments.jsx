import React, { Component } from "react";
import { ApartmentContext } from "../context";
import Title from "../components/Title";
import Loading from "./Loading";
import Apartment from "../components/Apartment";
import styled from "styled-components";

const FeaturedSection = styled.section`
  padding: 2rem 0 5rem 0;
`;

const FeaturedApartmentsCenter = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 40px;
  @media screen and (min-width: 776px) {
    width: 90vw;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

export default class FeaturedApartments extends Component {
  static contextType = ApartmentContext;
  render() {
    let { loading, featuredApartments: apartments } = this.context;
    apartments = apartments.map(apartment => {
      return <Apartment key={apartment.id} apartment={apartment} />;
    });

    return (
      <FeaturedSection>
        <Title title="Latest apartments" />
        <FeaturedApartmentsCenter>
          {loading ? <Loading /> : apartments}
        </FeaturedApartmentsCenter>
      </FeaturedSection>
    );
  }
}
