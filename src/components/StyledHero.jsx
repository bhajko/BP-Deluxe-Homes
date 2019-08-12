import styled from "styled-components";

const StyledHero = styled.header`
  min-height: calc(60vh - 45px);
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: calc(60vh);
    background: rgba(0, 0, 0, 0.3);
  }
`;

export default StyledHero;
