/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLOR, DEVICE } from "../../styles/base";

export const Section = styled.div`
  display: flex;
  position: relative;

  &.is-loading-error {
    align-items: center;
    height: calc(100vh - 3.2rem);
    justify-content: center;
  }
`;

export const H3 = styled.h3`
  @media ${DEVICE.minDesktop} {
    font-size: 2rem;
  }
`;

export const WrapperStory = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
`;
