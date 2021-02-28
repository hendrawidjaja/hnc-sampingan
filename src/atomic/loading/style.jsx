import styled, { keyframes } from "styled-components";

const blink = keyframes`
    0% {
      opacity: .2;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: .2;
    }
`;

export const LoadingDots = styled.div`
  display: inline-flex;
  position: relative;
  span {
    &:nth-child(2n) {
      animation-delay: 0.2s;
    }
    &:nth-child(3n) {
      animation-delay: 0.4s;
    }
  }
`;

export const Dots = styled.span`
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-name: ${blink};
  background: #000000;
  border-radius: 2px;
  display: inline-block;
  height: 6px;
  margin-left: 0.3rem;
  width: 6px;
`;
