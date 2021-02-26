/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLOR, DEVICE } from "../../styles/base";

export const Section = styled.div`
  background-color: #f6f6ef;
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

export const Span = styled.span`
  color: ${COLOR.Span};
  font-size: 14px;

  @media ${DEVICE.minDesktop} {
    font-size: 15px;
  }
`;

export const Value = styled.span`
  color: #323232;
  font-size: 14px;

  @media ${DEVICE.minDesktop} {
    font-size: 15px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 5.25rem auto;
  min-height: 1.75rem;
`;

export const WrapperSubmitted = styled.div`
  position: relative;
  display: inline-grid;
  grid-template-columns: repeat(2, 5rem);
  grid-column-gap: 0.4rem;

  @media ${DEVICE.minDesktop} {
    grid-template-columns: repeat(12, 5rem);
  }
`;
