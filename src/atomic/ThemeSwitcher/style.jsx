import styled from "styled-components";
import { DEVICE } from "../../styles/base";

export const ThemeWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  @media ${DEVICE.minDesktop} {
    position: relative;
    top: 0;
    transform: none;
  }
`;

export const Img = styled.img`
  cursor: pointer;
  min-height: 0.8rem;
  min-width: 0.8rem;
  opacity: 0.35;

  &:hover {
    opacity: 1;
  }

  @media ${DEVICE.minDesktop} {
    min-height: 1rem;
    min-width: 1rem;
  }
`;

export const Span = styled.span`
  min-height: 1rem;
`;
