import styled from "styled-components";
import { COLOR, DEVICE } from "../../styles/base";

export const Navbar = styled.div`
  background-color: ${COLOR.Navbar};
  display: flex;
  flex-direction: column;
  min-height: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  position: relative;

  @media ${DEVICE.minDesktop} {
    align-items: center;
    flex-direction: row;
  }
`;

export const H3 = styled.h3`
  font-weight: bold;
`;

export const Submenu = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;

  @media ${DEVICE.minDesktop} {
    margin-left: 1.5rem;
  }
`;

export const MenuList = styled.li``;

export const Span = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  @media ${DEVICE.minDesktop} {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
  }
`;
