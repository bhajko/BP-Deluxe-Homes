import React from "react";
import loadingGif from "../images/loading-arrow.gif";
import styled from "styled-components";

const LoadingDiv = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

export default function Loading() {
  return (
    <LoadingDiv>
      <img src={loadingGif} alt="loading" />
    </LoadingDiv>
  );
}
