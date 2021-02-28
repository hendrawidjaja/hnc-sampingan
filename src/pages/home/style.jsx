/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLOR, FONT, SPACING } from "../../styles/base";

export const Section = styled.div`
  ${SPACING.Content};
  background-color: ${COLOR.Content};
  display: flex;
  position: relative;

  &.is-loading-error {
    align-items: center;
    height: calc(100vh - 3.2rem);
    justify-content: center;
  }
`;

export const H4 = styled.h4`
  ${FONT.Loading};
`;

export const WrapperUl = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
`;
