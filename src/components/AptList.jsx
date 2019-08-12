import React from "react";
import Apartment from "./Apartment";
import styled from "styled-components";

const EmptySearch = styled.div`
  text-align: center;
  text-transform: capitalize;
  margin: 2rem 0;
  padding: 1rem;
  letter-spacing: ${props => props.theme.mainSpacing};
`;

const ApartmentList = styled.section`
  padding-bottom: 5rem;
`;

const ApartmentListCenter = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 30px;
  @media screen and (min-width: 776px) {
    width: 90vw;
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

export default function AptList({ apartments }) {
  if (apartments.length === 0) {
    return (
      <EmptySearch>
        <h3>No apartments matched your criteria</h3>
      </EmptySearch>
    );
  }
  return (
    <ApartmentList>
      <ApartmentListCenter>
        {apartments.map(item => {
          return <Apartment key={item.id} apartment={item} />;
        })}
      </ApartmentListCenter>
    </ApartmentList>
  );
}
