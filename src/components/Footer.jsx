import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.75rem 2rem;
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.mainWhite};
`;

export default function Footer() {
  return (
    <FooterDiv>
      <p>© BPDeluxeHomes {new Date().getFullYear()}</p>
    </FooterDiv>
  );
}
