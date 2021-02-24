/* eslint-disable no-unused-vars */
import styled from "styled-components";

export const COLOR = {
  Navbar: `rgba(255, 102, 0, 1)`,
};

export const DEVICE = {
  minMobileS: `(min-width: 20rem)`,
  minMobileL: `(min-width: 25.875rem)`,
  minTablet: `(min-width: 48rem)`,
  minDesktop: `(min-width: 62.25rem)`,
};

export const DEVICEGUTTER = `
  padding: 0.7rem 1rem;

  @media ${DEVICE.minDesktop} {
    padding: 0.8rem 1.25rem;
  }
`;
