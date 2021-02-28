/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLOR, DEVICE, FONT } from "../../styles/base";

export const WrapperLi = styled.li`
  position: relative;
  margin-top: 1rem;

  a {
    color: ${COLOR.DarkGrey};
    ${FONT.Span};
  }
`;

export const A = styled.a`
  display: flex;
  position: relative;
`;

export const H4 = styled.h4`
  ${FONT.ListTitle};
  ${COLOR.ListTitle};
`;

export const SanitizeUrl = styled.span`
  ${FONT.ListTitle};
  color: ${COLOR.DarkGrey};
  padding: 0 0.3rem;
  position: relative;
`;

export const WrapperInformation = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const Points = styled.div`
  color: ${COLOR.DarkGrey};
  ${FONT.Span};
`;

export const Divider = styled.span`
  padding: 0 0.25rem;
  color: ${COLOR.Divider};
`;

export const WrapperTiming = styled.div`
  position: relative;
  color: ${COLOR.DarkGrey};
  ${FONT.Span};
`;
