import styled from "styled-components";

export const DividerSpan = styled.span`
  position: relative;
  margin-left: 0.7rem;
  margin-right: 0.7rem;

  &:after {
    background-color: #222222;
    content: " ";
    display: flex;
    min-height: 1.1rem;
    position: absolute;
    transform: translate(-50%, -50%);
    width: 0.05rem;
  }
`;
