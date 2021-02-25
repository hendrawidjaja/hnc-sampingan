/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLOR, DEVICE } from "../../styles/base";

export const Section = styled.div`
  display: flex;
  position: relative;
  background-color: #f6f6ef;

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
  color: #828282;
  font-size: 14px;
  line-height: 1.5;

  @media ${DEVICE.minDesktop} {
    font-size: 15px;
  }
`;

export const Value = styled.span`
  color: #323232;
  font-size: 13px;
  line-height: 1.5;

  @media ${DEVICE.minDesktop} {
    font-size: 15px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 5rem auto;
`;

export const WrapperSubmitted = styled.div`
  position: relative;
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0.5rem;

  @media ${DEVICE.minDesktop} {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0.75rem;
  }
`;
