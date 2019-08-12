import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled(Link)`
  display: inline-block;
  text-decoration: none;
  letter-spacing: ${props => props.theme.mainSpacing};
  color: ${props => props.theme.mainWhite};
  background: ${props => props.theme.primaryColor};
  padding: 0.4rem 0.9rem;
  border: 3px solid ${props => props.theme.primaryColor};
  border-radius: 3px;
  transition: ${props => props.theme.mainTransition};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: ${props => props.theme.mainWhite};
  }
`;
