import styled from "styled-components";
import { COLOR, DEVICE, FONT, SPACING } from "../../styles/base";

export const MenuList = styled.li`
  display: flex;
  line-height: 1.5;
  width: 35%;

  @media ${DEVICE.minDesktop} {
    width: auto;
  }
`;

export const Navbar = styled.div`
  ${SPACING.navbar};
  ${SPACING.navbarHeight};
  background-color: ${COLOR.Navbar};
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${DEVICE.minDesktop} {
    align-items: center;
    flex-direction: row;
  }
`;

export const H3 = styled.h3`
  ${FONT.H3};
  color: ${COLOR.navBarTitle};
  font-weight: bold;
`;

export const Submenu = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  transition: 0.3s ease-in-out;
  width: 80%;

  a {
    ${FONT.Span};
  }

  @media ${DEVICE.minDesktop} {
    margin-left: 1.25rem;
    padding-bottom: 0;
    padding-top: 0;
    transition: 0.3s ease-in-out;
    width: 100%;
  }
`;
