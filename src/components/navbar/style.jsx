import styled from "styled-components";
import { COLOR, DEVICE, FONT, SPACING } from "../../styles/base";

export const MenuList = styled.li``;

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

  @media ${DEVICE.minDesktop} {
    margin-left: 1.25rem;
  }
`;

export const Span = styled.span`
  margin-left: 0.3rem;
  margin-right: 0.3rem;

  @media ${DEVICE.minDesktop} {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;
