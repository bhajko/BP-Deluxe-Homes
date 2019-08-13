import styled from "styled-components";

export default styled.header`
  min-height: calc(${props => props.height} - 40px);
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
    height: calc(${props => props.height});
    background: rgba(0, 0, 0, 0.3);
  }
`;
